import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
  posts: [
    {id: 1, message: 'Hi, looser', likesCount: 55},
    {id: 2, message: 'Fuck you, stupid dick', likesCount: 92},
    {id: 3, message: 'H1233123', likesCount: 5},
    {id: 4, message: 'Ffsdfsdf', likesCount: 9}
  ]
};

it('length of posts should be increment', () => {
  //1.test data
  let action = addPostActionCreator("New Text");

  //2.action
  let newState = profileReducer(state,action);

  //3.expectation
  expect (newState.posts.length).toBe(5);
});

it('5 post should be New Text', () => {
  //1.test data
  let action = addPostActionCreator("New Text");

  //2.action
  let newState = profileReducer(state,action);

  //3.expectation
  expect (newState.posts[4].message).toBe("New Text");
});

it('after deleting length of posts should be decrement', () => {
  //1.test data
  let action = deletePost(1);

  //2.action
  let newState = profileReducer(state,action);

  //3.expectation
  expect (newState.posts.length).toBe(3);
});

it(`after deleting length shouldn't be decrement is id is incorrect`, () => {
  //1.test data
  let action = deletePost(1000);

  //2.action
  let newState = profileReducer(state,action);

  //3.expectation
  expect (newState.posts.length).toBe(4);
});




