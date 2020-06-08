const APP_ID = 'bfae6ace';
const APP_KEY = '890847a09f410c0adb3992a92b1222f7';

export default class RecipeService { 


    static async getRecipe(query: string) {
        const response = await fetch(`https://api.edamam.com/search?r=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        const data = await response.json();
        return data[0];
    }

    static async getRecipes (query:string) {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();          
        return data;
      }
} 