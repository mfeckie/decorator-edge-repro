import { inject as service } from '@ember-decorators/service';
import Component from '@ember/component';
import { computed } from '@ember-decorators/object';
import { task } from 'ember-concurrency-decorators';

export default class ReproDecoratorComponent extends Component {
  @service myService: MyService;
  @computed('foo')
  get myFoo() {
    return this.myService.number * 2;
  }

  @task
  *doStuff() {
    return yield Promise.resolve('yay');
  }
}
