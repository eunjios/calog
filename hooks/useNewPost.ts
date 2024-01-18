import { useRef } from 'react';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { postRepo } from '@/recoil/posts/selectors';
import { NewPostInfo } from '@/recoil/posts/types';
import useImagePicker from './useImagePicker';

function useNewPost() {
  const router = useRouter();
  const titleRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const { pickedImage, pickImage } = useImagePicker();
  const { add } = useRecoilValue(postRepo);

  const publish = () => {
    const title = titleRef.current?.value;
    const text = textRef.current?.value;
    if (!title || !text || !pickedImage) {
      return;
    }
    const newPost: NewPostInfo = {
      title: title,
      description: text,
      image: pickedImage,
    };
    add(newPost);
    router.push('/calog');
  };

  return { titleRef, textRef, pickedImage, pickImage, publish };
}

export default useNewPost;
