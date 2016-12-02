import WelcomeScreen from '../containers/welcome_screen'
import counterStore from '../stores/counter_store'
import CheckinScreen from '../containers/checkin_screen'

export default new class Routes {
  get WelcomeScreen () {
    return {
      title: 'Home',
      showTabBar: true,
      hideBackButton: true,
      component: WelcomeScreen,
      store: {
        counterStore: counterStore,
      }
    }
  }

  get CheckinScreen () {
    return {
      title: 'Checkin',
      showTabBar: true,
      hideBackButton: true,
      component: CheckinScreen,
    }
  }

  get TaskScreen () {
    return {
      title: 'Task',
      showTabBar: true,
      hideBackButton: true,
      component: require('../containers/task_screen').default,
    }
  }

  get ProfileScreen () {
    return {
      title: 'Profile',
      showTabBar: true,
      hideBackButton: true,
      component: require('../containers/profile_screen').default,
    }
  }

  get SecondScreen () {
    return {
      title: 'Second Screen',
      component: require('../containers/second_screen').default,
    }
  }

  get CounterScreen () {
    return {
      title: 'Counter Screen',
      component: require('../containers/counter_screen').default,
      store: {
        counterStore: require('../stores/counter_store').default,
      }
    }
  }
}
