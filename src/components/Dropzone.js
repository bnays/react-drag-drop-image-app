import { memo } from 'react'
import { useDrop } from 'react-dnd'
import Picture from './Picture'

const style = {
   transition: "all 0.2s ease-in-out"
}

const Dropzone = memo(function Dustbin({
   onDrop, limit, noOfSolars
}) {

   const [{ isOver, canDrop }, drop] = useDrop({
      accept: "image",
      drop: noOfSolars === limit ? false : onDrop,
      collect: (monitor) => ({
         isOver: monitor.isOver(),
         canDrop: noOfSolars === limit ? false : monitor.canDrop()
      }),
   })
   const isActive = isOver && canDrop
   let backgroundColor = 'transparent'
   if (isActive) {
      backgroundColor = '#00800069'
   } else if (canDrop) {
      backgroundColor = '#ffffff6e'
   }
   return (
      <div ref={drop} style={{ ...style, backgroundColor }} data-testid="dustbin">
         {[...Array(noOfSolars)].map((item, key) => {
            return <Picture key={key} noDrag={true} />;
         })}
      </div>
   )
})

export default Dropzone