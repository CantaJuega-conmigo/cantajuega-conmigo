
export const navVariants = {
hidden: {
  opacity: 0,
  y: -50,
  transition: {
    type: 'spring',
    sitffness: 300,
    damping: 140,
  },

},
show: {
  opacity: 1,
  y: 0,
  transition: {
    type: 'spring',
    stiffness: 80,
    delay: 0.5,

  },
},
}