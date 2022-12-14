
export const ReactFortinet = (() => {

  let value: any = [];
  let index = 0;

  const useStateFortinet = (intialState: string) => {
    let localIndex = index;
    index++;
    if (!value[localIndex]) {
      value[localIndex] = intialState
    }
    const setterFunction = (newValue: string) => {
      value[localIndex] = newValue
    }

    return [value[localIndex], setterFunction]
  }

  const resetIndex = () => {
    index = 0
  }

  return {
    useStateFortinet,
    resetIndex
  }

})()

const { useStateFortinet, resetIndex } = ReactFortinet

const MyComponent = () => {
  const [v, setV] = useStateFortinet("Urit");

  const render = () => console.log(v)
  if (v === "Urit") {
    setV("Sagi")
  }
  return { render };
}

MyComponent().render()
resetIndex()
MyComponent().render()

