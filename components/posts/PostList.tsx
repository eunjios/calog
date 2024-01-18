import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import { selectedPostList } from '@/recoil/posts/selectors';
import Post from './Post';
import writingIcon from '@/public/images/writing.webp';
import classes from './PostList.module.css';

function PostList() {
  const posts = useRecoilValue(selectedPostList);

  // post 없을 경우
  if (posts.length === 0) {
    return (
      <div className={classes.container}>
        <Image
          className={classes.icon}
          src={writingIcon}
          alt="펜과 종이 아이콘"
          width={80}
          height={80}
          priority
        />
        <p className={classes['empty-text']}>기록으로 하루를 남겨 보세요</p>
      </div>
    );
  }

  // post 있을 경우
  return (
    <ul className={classes.list}>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </ul>
  );
}

export default PostList;
