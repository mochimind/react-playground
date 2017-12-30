
const listeners = [];

// takes as input a function that will handle listen events
export const AddListener = (listener) => {
    listeners.push(listener);
}

// takes as input a function that was previously subscribed as a listener
export const RemoveListener = (listener) => {
    for (let i=0 ; i<listeners.length ; i++) {
        if (listeners[i] === listener) {
            listeners.splice(i, 1);
            return;
        }
    }
}

// broadcasts the eventType to all listeners
export const Broadcast = (eventType, args) => {
    for (let i=0 ; i<listeners.length ; i++) {
        listeners[i](eventType, args);
    }
}

export const EventType = {
    update: 1
}
