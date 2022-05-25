import create from "zustand"
// TODO: answer here
import { persist, devtools } from "zustand/middleware"
import { produce } from "immer"

const useItemStore = create(persist((set) => ({
          items: [],
          addItem: (item) => {
            set((state) => ({
              items: [...state.items, item],
            }))
          },
          
          removeItem: (itemId) => {
            set((state) => ({
              items: state.items.filter((index) => index.id !== itemId),
            }))
          },
        }),
        { name: "items" },
      ),
    )


export default useItemStore
