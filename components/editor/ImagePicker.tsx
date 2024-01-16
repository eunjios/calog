import { useRef } from 'react';
import { FaRegImage } from 'react-icons/fa6';
import { Container, Input, Button } from './ImagePicker.style';

interface Props {
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function ImagePicker({ changeHandler }: Props) {
  const imageRef = useRef<HTMLInputElement>(null);

  const clickInputRef = () => {
    imageRef.current?.click();
  };

  return (
    <Container>
      <Input
        type="file"
        accept="image/png, image/jpeg"
        required
        ref={imageRef}
        onChange={changeHandler}
      />
      <Button type="button" onClick={clickInputRef}>
        <FaRegImage size={12} />
      </Button>
    </Container>
  );
}

export default ImagePicker;
