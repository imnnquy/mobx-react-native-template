import LoginScreen from '../containers/login_screen'
import userStore from '../stores/user_store'
import CheckinScreen from '../containers/checkin_screen'
import MainScreen from '../containers/main_screen'

export default new class Routes {
  get LoginScreen () {
    return {
      title: 'Login',
      hideBackButton: true,
      hideNavBar: true,
      component: LoginScreen,
      store: {
        userStore: userStore,
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
      title: 'Recent Purchases',
      component: require('../containers/recent_purchases_screen').default,
    }
  }

  get CurrentOffersScreen () {
    return {
      title: 'Current Offers',
      component: require('../containers/current_offers_screen').default,
    }
  }

  get RewardPointsScreen () {
    return {
      title: 'Reward points',
      component: require('../containers/reward_points_screen').default,
    }
  }

  get RewardsCardScreen () {
    return {
      title: 'Rewards card',
      component: require('../containers/reward_card_screen').default,
      store: {
        userStore: userStore,
      }
    }
  }

  get AccountInformationScreen () {
    return {
      title: 'Account information',
      component: require('../containers/account_information_screen').default,
      store: {
        userStore: userStore,
      }
    }
  }
}
