import Image from 'next/image';
import ImagePicker from './ImagePicker';
import { Container, Content, Text, Title } from './NewPostForm.style';
import EditorLayout from './Layout';
import useNewPost from '@/hooks/useNewPost';

function NewPostForm() {
  const { titleRef, textRef, pickedImage, pickImage, publish } = useNewPost();

  return (
    <EditorLayout publish={publish}>
      <Container>
        <form>
          {/* 제목 */}
          <Title>
            <input type="text" placeholder="제목" ref={titleRef} />
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
              <textarea
                rows={15}
                placeholder="오늘 하루를 기록해 보세요..."
                ref={textRef}
              />
            </Text>
          </Content>
        </form>
      </Container>
    </EditorLayout>
  );
}

export default NewPostForm;
