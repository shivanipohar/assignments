import React, { useReducer } from "react";
import { bookReducer } from "../reducers/bookreducer";
//creating context
const UserContext = React.createContext<any>({});

interface Props {
  children?: any;
}
const BookContextProvider = (props: Props) => {
  const [state, dispatch] = useReducer(bookReducer, {}, () => {
    return {
      books: [
        {
          id: 1,

          title: "The Accursed God",
          author: "Vivek Dutta Mishra",

          price: "199",
          rating: "4.9",

          description:
            "THE LOST EPIC ============ The story of the epic battle of Kurukshetra has been told and retold for ages. Millennia of dust, fables, imaginations — and the epic itself is lost. What remained is the story of a family feud and ambition of Kauravas and Pandavas. But why, then, was this an epic war? Why entire Aryavart plunged into this first real world-war? Why the echo of this ancient war still resonates after all those centuries? Rediscover the lost epic whose origin lies in the birth of the Kurukshetra that had tasted its first blood over a hundred years before the final Mahabharata war. Discover the complete saga of Mahabharata which goes far and beyond just Kauravas and Pandavas and their ambitions. THE ACCURSED GOD ================ Long before the epic battle, long before even the birth of Kurukshetra, a man swore on his father’s pyre to avenge against the mightiest empire, any civilization had ever seen. Between his might and near-certain destruction of the Empire, stood a warrior, who rose like a phoenix from the ashes of his seven dead brothers",
          cover:
            "http://thelostepic.com/wp-content/uploads/2021/04/THE-ACCURSED-GOD-Front-780x1100-1.jpg",
        },
        {
          id: 2,

          title: "Harry Potter and the Philosopher's Stone",
          author: "JK Rowling",

          price: "150",
          rating: "4",
          description:
          "Harry Potter and the Philosopher's Stone was J.K. Rowling's first novel, followed by the subsequent six titles in the Harry Potter series, as well as three books written for charity",
          cover:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_9nrOnN8sYfZZHJ06EIBSoEO5qjx7uHHEs6VtKNplGVuGhZuC"
        },
        {
          id: 3,

          title: "Five Little Pigs",
          author: "Agatha Christie",

          price: "180",
          rating: "5",
          description:
          "The Count of Monte Cristo (French: Le Comte de Monte-Cristo) is an adventure novel by French author Alexandre Dumas (père) completed in 1844. It is one of the author's more popular works, along with The Three Musketeers. Like many of his novels, it was expanded from plot outlines suggested by his collaborating ghostwriter Auguste Maquet.[1] Another important work by Dumas, written before his work with Maquet, was the 1843 short novel Georges; this novel is of particular interest to scholars because Dumas reused many of the ideas and plot devices later in The Count of Monte Cristo.[2] The story takes place in France, Italy, and islands in the Mediterranean during the historical events of 1815–1839: the era of the Bourbon Restoration through the reign of Louis-Philippe of France. It begins just before the Hundred Days period (when Napoleon returned to power after his exile). The historical setting is a fundamental element of the book, an adventure story primarily concerned with themes of hope, justice, vengeance, mercy, and forgiveness. It centres on a man who is wrongfully imprisoned, escapes from jail, acquires a fortune, and sets about exacting revenge on those responsible for his imprisonment. His plans have devastating consequences for both the innocent and the guilty. The book is considered a literary classic today",
          cover:
          "https://kbimages1-a.akamaihd.net/d54608a2-1499-47eb-bd78-e96b384c49e5/1200/1200/False/five-little-pigs.jpg"
        },
        {
          id: 4,

          title: "Harry Potter and the Prisoner of Azkaban",
          author: "JK Rowling",

          price: "340",
          rating: "3",
          description:
          "Harry Potter and the Chamber of Secrets is a fantasy novel written by British author J. K. Rowling and the second novel in the Harry Potter series. The plot follows Harry's second year at Hogwarts School of Witchcraft and Wizardry, during which a series of messages on the walls of the school's corridors warn that the 'Chamber of Secrets' has been opened and that the 'heir of Slytherin' would kill all pupils who do not come from all-magical families. These threats are found after attacks that leave residents of the school petrified. Throughout the year, Harry and his friends Ron and Hermione investigate the attacks.",
          cover:
          "https://kbimages1-a.akamaihd.net/69eca8ca-652c-4641-b86f-42de460a6d4d/1200/1200/False/harry-potter-and-the-prisoner-of-azkaban-6.jpg"
        },
      ],
      users: [
        {
          name: "shivani",
          email: "shivani@gmail.com",
          password: "shivani",
        },
        {
          name: "anu",
          email: "anu@gmail.com",
          password: "anu",
        },
      ],
      activeuser:{email:"",token:""}
    };
  });
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
};

export {BookContextProvider,UserContext};
