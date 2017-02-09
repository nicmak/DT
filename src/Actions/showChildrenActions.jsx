export const showChildren = (component) => {
  return {
  	type:'TOGGLE_CHILDREN',
  	payload: {
  		component:component,
  		open:true
  	}
  }
}