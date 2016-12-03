import WelcomeScreen from '../containers/welcome_screen'
import counterStore from '../stores/counter_store'
import CheckinScreen from '../containers/checkin_screen'
import MainScreen from '../containers/main_screen'

export default new class Routes {
  get WelcomeScreen () {
    return {
      title: 'Home',
      hideBackButton: true,
      component: WelcomeScreen,
      store: {
        counterStore: counterStore,
      }
    }
  }

  get MainScreen () {
    return {
      title: 'Loyalty',
      hideBackButton: true,
      component: MainScreen,
    }
  }

  get RecentPurchasesScreen () {
    return {
      title: 'RecentPurchasesScreen',
      component: require('../containers/task_screen').default,
    }
  }

  get CurrentOffersScreen () {
    return {
      title: 'CurrentOffersScreen',
      component: require('../containers/profile_screen').default,
    }
  }

  get RewardPointsScreen () {
    return {
      title: 'Reward points',
      component: require('../containers/second_screen').default,
    }
  }

  get RewardsCardScreen () {
    return {
      title: 'Rewards card',
      component: require('../containers/counter_screen').default,
      store: {
        counterStore: counterStore,
      }
    }
  }

  get AccountInformationScreen () {
    return {
      title: 'Account information',
      component: require('../containers/counter_screen').default,
      store: {
        counterStore: counterStore,
      }
    }
  }
}
