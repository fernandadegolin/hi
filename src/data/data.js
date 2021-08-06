// import "./styles.css";

// const data = {
//   "0": {
//     id: "2469bdab-23b5-4cb8-90c9-c609a49410b0",
//     name: "Joao oliveira",
//     children: {
//       "0": {
//         id: "97cd3a19-0f1c-4248-a84c-a1f5a0093a89",
//         name: "Luis Ricardo",
//         children: {
//           "0": {
//             id: "6410eff5-5aff-46fd-bb08-ed90581007b4",
//             name: "Mauricio Fernandes",
//             children: {
//               "0": {
//                 id: "35996ee4-74a6-4343-ba5e-9700c24bee11",
//                 name: "Jose Santos",
//                 children: {
//                   "0": {
//                     id: "59fdebaf-0229-4d27-901d-4cfbb4cf81de",
//                     name: "Maria Pereira",
//                     children: {},
//                     level: 4
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// };

// const Person = (props) => {
//   return (
//     <div style={{ marginLeft: props.depth * 8 }}>
//       <span>{props.name}</span>
//       {Object.values(props.children).map((child) => (
//         <Person {...child} key={child.id} depth={props.depth + 1} />
//       ))}
//     </div>
//   );
// };

// export default function App() {
//   return <Person children={data} depth={0} />;
// }
