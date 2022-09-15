import React, { useRef, useState } from 'react'

const EventExapmle = () => {
  const [input, setinput] = useState<string>('')
  const [drag, setDrag] = useState<boolean>(false)
  const notDriven = useRef<HTMLInputElement>(null)

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setinput(e.target.value)
  }

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(input)
    console.log(notDriven.current?.value)
  }

  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('Drag')
  }
  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDrag(false)
  }
  const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDrag(false)
  }
  const overWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDrag(true)
  }

  return (
    <div>
      <input type='text' value={input} onChange={changeHandler} placeholder={'driven'} />
      <input ref={notDriven} type='text' placeholder={'Not-driven'} />
      <button onClick={clickHandler}>click</button>

      <div
        onDrag={dragHandler}
        draggable
        style={{
          width: 200,
          height: 200,
          background: 'coral',
          margin: 40,
        }}></div>

      <div
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={overWithPreventHandler}
        style={{
          width: 200,
          height: 200,
          background: drag ? 'lightblue' : 'grey',
          margin: 40,
        }}></div>
    </div>
  )
}

export default EventExapmle
