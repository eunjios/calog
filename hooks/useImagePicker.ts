import { useState } from 'react';

const useImagePicker = () => {
  const [pickedImage, setPickedImage] = useState<string | null>(null);

  const resetImage = () => {
    setPickedImage(null);
  };

  const pickImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.currentTarget.files) {
      resetImage();
      return;
    }
    const file = event.currentTarget.files[0];
    if (!file || !file?.type.startsWith('image/')) {
      resetImage();
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result as string);
    };
    fileReader.readAsDataURL(file);
  };

  return { pickedImage, pickImage };
};

export default useImagePicker;
