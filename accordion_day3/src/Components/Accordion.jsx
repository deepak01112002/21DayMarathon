import React, { useState } from 'react'
import './Accordion.css'
function Accordion() {
    const [state,setState] = useState(null)
    const handleClick = (index)=>{
        if(state == null){
        setState(index)
        }else{
          setState(null)
        }
    }
  return (
    <>
       {[1,2,3].map((el,index)=>{
        return (
            <div className='data' >
            <h1 onClick={()=>handleClick(index)}>Accordion {el} {index == state ? <span class="material-symbols-outlined">arrow_downward</span> : <span class="material-symbols-outlined">
arrow_upward
</span>}</h1>
           { <div className={state==index ? "content active" : "content"}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam unde ullam in natus eaque voluptatibus rem aliquid aut. Sunt inventore blanditiis reiciendis? Quos, soluta quas. Incidunt harum perspiciatis est ducimus.
              Numquam pariatur iste at hic soluta natus illum quas totam quibusdam rem et distinctio illo, voluptatem molestiae veniam eaque repellendus beatae laboriosam temporibus sunt? Qui harum vel dolore quos earum?
              Quia accusamus dolor suscipit ab ea itaque veritatis inventore nihil amet consequuntur dolore nisi quasi fugit quisquam rem laboriosam minus iure dolores assumenda, eum earum sunt? Architecto, libero? Fugiat, beatae!
              Ratione quod laudantium, laboriosam sit sed quos consectetur nam fuga, optio voluptatibus alias beatae placeat voluptatum suscipit quam dolores reprehenderit porro, sint illo fugiat repellendus ad! Ducimus vitae repellendus ipsam.
              Ea deleniti quis quo voluptatem tempore, odit rerum quos maxime aliquid ex animi distinctio doloribus quidem sequi dicta nisi dolore repellendus totam ut beatae dolores? Ut voluptates optio repellendus rem?
              Consequuntur dolorem cum amet magni reprehenderit vel iusto, voluptates eos nemo a quia. Autem repellendus corrupti natus, assumenda in consequatur deserunt eum est odit, optio, nemo velit. Culpa, odit in.
              Itaque provident natus nobis, consectetur facere et modi libero quas at reiciendis excepturi illum aperiam praesentium molestiae odit doloribus laboriosam dolorum, earum iste odio in. Ea aliquam accusamus eveniet iste.
              Asperiores mollitia, nemo doloremque alias totam ea itaque hic doloribus obcaecati, dignissimos corporis, perspiciatis natus esse quidem incidunt fuga sit? Accusantium distinctio cum neque nemo consequuntur eveniet ea quis recusandae!
              Fugit, natus dolore reiciendis assumenda odit culpa repellendus explicabo optio nemo a autem laborum nobis provident fuga impedit inventore architecto vero. Iusto provident officiis rem reprehenderit quis blanditiis labore nemo.
              Suscipit, eum? Optio quibusdam recusandae, voluptas inventore blanditiis tempora quam sunt iste saepe amet, ea dolor. Corrupti sit nulla cumque, fugit quisquam quos architecto perspiciatis assumenda, in excepturi, harum quasi!</p>
            </div> }
           </div>
        )
       })}
    </>
  )
}

export default Accordion