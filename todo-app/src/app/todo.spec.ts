import {Todo} from './todo';

describe('Todo', () => {
  it('는 인스턴스를 생성해야 한다', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('는 생성자에서 인자를 받아들여야 한다', () => {
    const todo = new Todo({
      title: 'hello',
      complete: true
    });
    expect(todo.title).toEqual('hello');
    expect(todo.complete).toEqual(true);
  });
});
