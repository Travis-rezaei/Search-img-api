const accesskey='PT_oo9h5NIi2I7jaAe0di-sAtT0F_hXs8_6uDs_cUU4'

const FromEl=document.querySelector('form')
const inputEl=document.getElementById('search-input')
const searchResults=document.querySelector('.search-results')
const showMore=document.getElementById("Show-more-button")


let inputData =""
let page = 1;

async function searchimages(){
    inputData=inputEl.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}`
    
   const fetchimage= await fetch(url)
   const respons=await fetchimage.json()
    
   const data=respons.results
      
      
   if(page===1){
     searchResults.innerHTML=''
   }
   

   data.map((result)=>{
    const imagewrapper=document.createElement('div')
    imagewrapper.classList.add('search-result')
    const image=document.createElement('img')
    image.src=result.urls.small
    image.alt=result.alt_description
    const imagelink=document.createElement('a')
    imagelink.href=result.links.html
    imagelink.target='_blank'
    imagelink.innerHTML='Mountains under sky'

    imagewrapper.appendChild(image)
    imagewrapper.appendChild(imagelink)
    searchResults.appendChild(imagewrapper)

   })


   page++

   if(page > 1){
    showMore.style.display='block'
   }
}

FromEl.addEventListener('submit',(ev)=>{
    ev.preventDefault()
    page=1;
    searchimages()
})

showMore.addEventListener('click',()=>{
    searchimages()
})








