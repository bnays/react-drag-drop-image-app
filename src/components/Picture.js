import { memo } from 'react'
import { useDrag } from 'react-dnd'
import SolarPanel from "../assets/images/solarpanel.png"

const style = {
   cursor: 'move',
   float: 'left',
}

export const Picture = memo(function Picture({ id, noDrag }) {
   const [{ opacity, isDragging }, drag, div] = useDrag(
      () => ({
         type: "image",
         collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0.4 : 1,
            isDragging: !!monitor.isDragging(),
         }),
      }),
      [id],
   )
   return (
      <img
         ref={noDrag ? div : drag}
         src={SolarPanel}
         style={{ border: isDragging ? "1px solid pink" : "1px solid #000000", ...style, opacity }}
      />
   )
})

export default Picture;