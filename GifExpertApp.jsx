import {  useState } from 'react'
import { AddCategory, GifGrid } from './src/components';


//const ApiKey='5WdgDUwcmR041KvQD3gxlXFwPElf2CHI'
export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);
  const onAddCategory = (newCategory) => {

    //valido que no se repita
    if (categories.includes(newCategory)) return ;

    //console.log ('Valorian');
    setCategories([newCategory , ...categories]);
    //setCategories( cat => ['Valoriant',...categories]);
  };
  return (
    <>
      <h1> GifExpertApp  </h1>

      <AddCategory 
          onNewCategory={(value) => onAddCategory(value)}
      /> 

        { 
        categories.map( (category) => (
            <GifGrid key = { category }
            category={category}  />
          ))
        }
    </>
  )
}
