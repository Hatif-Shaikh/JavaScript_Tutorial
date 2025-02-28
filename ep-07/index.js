// fetch API 
// Github API
const GithubApi = "  https://api.github.com/users/Hatif-Shaikh";

const fetchData = async () => {
    try{
        const response = await fetch(GithubApi);
        const jsonData = await res.json();
        console.log(jsonData);
    } catch(error) {
        console.log("error");            
    }
    finally{
        console.log("Allawys run this function");
        
    }
    
}
fetchData();

// // named export
// export const name = "Developer";
// // default export
// export default name;