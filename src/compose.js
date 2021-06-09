
export default function Compose({components = [], children}) {
  return (
      <>
          {components.reduceRight((acc, Comp) => {
              return <Comp>{acc}</Comp>
          }, children)}
      </>
  )
}