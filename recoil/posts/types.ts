import { PostInfo } from '@/types';

export type NewPostInfo = Omit<PostInfo, 'id' | 'date' | 'author'>;
