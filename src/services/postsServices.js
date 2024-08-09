import requests from './httpService';

const PostsServices = {
	// get all posts
	getAllPosts: async () => {
		return requests.get('/posts');
	},
	// get single post
	getSinglePost: async id => {
		return requests.get(`/posts/${id}`);
	},
};

export default PostsServices;
