import Image from 'next/image';
import useImagePicker from '@/hooks/useImagePicker';
import ImagePicker from './ImagePicker';
import { Container, Content, Text, Title } from './NewPostForm.style';
import EditorLayout from './Layout';

function NewPostForm() {
  const { pickedImage, pickImage } = useImagePicker();

  return (
    <EditorLayout publish={() => {}}>
      <Container>
        <form>
          {/* 제목 */}
          <Title>
            <input type="text" placeholder="제목" />
          </Title>
          {/* 본문 */}
          <Content>
            <ImagePicker changeHandler={pickImage} />
            {pickedImage && (
              <Image
                src={pickedImage}
                alt="썸네일"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            )}
            <Text>
              <textarea rows={15} placeholder="오늘 하루를 기록해 보세요..." />
            </Text>
          </Content>
        </form>
      </Container>
    </EditorLayout>
  );
}

export default NewPostForm;
