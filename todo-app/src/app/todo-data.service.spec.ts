import { TestBed, inject } from '@angular/core/testing';
import { Todo } from './todo';
import { TodoDataService } from './todo-data.service';

describe('TodoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoDataService]
    });
  });

  it('should ...', inject([TodoDataService], (service: TodoDataService) => {
    expect(service).toBeTruthy();
  }));
});

describe('#getAllTodos()', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoDataService]
    });
  });

  it('기본으로 빈 배열을 반환해야 한다', inject([TodoDataService],
    (service: TodoDataService) => {
      expect(service.getAllTodos()).toEqual([]);
    }));

  it('모든 todo를 반환해야 한다', inject([TodoDataService],
    (service: TodoDataService) => {
      const todo1 = new Todo({title: '제목1', complete: false});
      const todo2 = new Todo({title: '제목2', complete: true});

      service.addTodo(todo1);
      service.addTodo(todo2);

      expect(service.getAllTodos()).toEqual([todo1, todo2]);
    }));
});

describe('#save(todo)', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoDataService]
    });
  });

  it('자동으로 id가 증가해야 한다', inject([TodoDataService],
    (service: TodoDataService) => {
      const todo1 = new Todo({title: '안녕1', complete: false});
      const todo2 = new Todo({title: '안녕2', complete: true});

      service.addTodo(todo1);
      service.addTodo(todo2);

      expect(service.getTodoById(1)).toEqual(todo1);
      expect(service.getTodoById(2)).toEqual(todo2);
    }));
});

describe('#deleteTodoById', () => {
  let todo1, todo2;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoDataService]
    });

    todo1 = new Todo({title: '안녕1', complete: false});
    todo2 = new Todo({title: '안녕2', complete: true});
  });

  it('id에 맞는 todo를 지워야 한다', inject([TodoDataService],
    (service: TodoDataService) => {
      service.addTodo(todo1);
      service.addTodo(todo2);

      service.deleteTodoById(1);
      service.deleteTodoById(2);

      expect(service.getAllTodos()).toEqual([]);
    }));

  it('맞는 id를 찾지 못하면 어떤 것도 지우지 말아야 한다',
    inject([TodoDataService], (service: TodoDataService) => {
      service.addTodo(todo1);
      service.addTodo(todo2);

      service.deleteTodoById(3);

      expect(service.getAllTodos()).toEqual([todo1, todo2]);
    }));
});

describe('#updateTodoById(id, values)', () => {
  let todo;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoDataService]
    });

    todo = new Todo({title: '안녕', complete: false});
  });

  it('상응하는 id와 업데이트된 데이타를 갖는 todo를 반환해야 한다',
    inject([TodoDataService], (service: TodoDataService) => {
      service.addTodo(todo);
      expect(service.updateTodoById(1, {title: '잘가'}).title)
        .toEqual('잘가');
    }));

  it('todo를 찾지 못하면 null을 반환해야 한다',
    inject([TodoDataService], (service: TodoDataService) => {
      service.addTodo(todo);
      expect(service.updateTodoById(3, { title: '테스트' })).toBeNull();
    }));
});

describe('#toggleTodoComplete(todo)', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoDataService]
    });
  });

  it('반대의 완료 상태를 갖는 업데이트된 todo를 반환해야 한다',
    inject([TodoDataService], (service: TodoDataService) => {
      const todo = new Todo({title: '안녕', complete: false});
      service.addTodo(todo);

      const updatedTodo = service.toggleTodoComplete(todo);
      expect(updatedTodo.complete).toBe(true);
    }));
});
