import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const posts = {
  pagination: {
    current_page_number: 1,
    total_count: 50,
    items_per_page: 10,
    last_page: 5,
    query_params: [ ]
  },
  items: [
    {
      created: "2016-07-30T15:46:43+0200",
      id: 101,
      title: "Qui et accusamus molestiae voluptas magnam non consequatur."
    },
    {
      created: "2016-07-30T15:46:43+0200",
      id: 102,
      title: "Et aut ab sunt alias rerum aut eius."
    },
    {
      created: "2016-07-30T15:46:43+0200",
      id: 103,
      title: "Id impedit veniam at qui."
    },
    {
      created: "2016-07-30T15:46:43+0200",
      id: 104,
      title: "Dolor vel fuga quia culpa."
    },
    {
      created: "2016-07-30T15:46:43+0200",
      id: 105,
      title: "Quo ab neque laboriosam quia ratione iste."
    }
  ]
};

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (post) => {
  return replaceAll(post.title, ' ', '-');
};

class PostApi {
  static getAllPosts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign({}, posts));
      }, delay);
    });
  }
}

export default PostApi;
