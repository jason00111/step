const stateStorage = {
  userId: 1,
  currentProjectId: 2,
  couldDos: {
    1: ['make my breakfast', 'eat my breakfast', 'relax'],
    2: ['pick some flowers', 'eat some flowers', 'smell some flowers'],
    3: ['call a friend', 'give unsolicited advice to people', 'make a painting']
  },
  projects: [],
  currentCouldDoIndex: 0,
}

const globalState = {

  subscribers: [],

  set( stateUpdates ) {
    Object.assign( stateStorage, stateUpdates )
    this.passStateToSubscribers()
  },

  get() {
    return stateStorage
  },

  subscribe( subscriber ) {
    this.subscribers.push( subscriber )
  },

  unsubscribe( subscriber ) {
    this.subscribers = this.subscribers
      .filter( sub => sub !== subscriber )
  },

  passStateToSubscribers() {
    if ( this.scheduledTrigger ) {
      return
    }
    this.scheduledTrigger = setTimeout( () => {
      delete this.scheduledTrigger
      this.subscribers.forEach( subscriber => {
        subscriber( stateStorage )
      })
    })
  }
}

export default globalState
