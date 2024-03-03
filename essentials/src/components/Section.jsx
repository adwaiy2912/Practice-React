export default function Section({ title, children, ...props }) {
   // ...props - used as a forwarding prop. -> for all props which are not destructured before; used for forwarding className, id, etc
   return (
      <section {...props}>
         <h2>{title}</h2>
         {children}
      </section>
   );
}
