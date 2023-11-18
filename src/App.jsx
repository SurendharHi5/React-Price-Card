import './App.css'

function App() {
 

  return (
  <div id='container'>
      <div className='row row-cols-1 row-cols-md-3'>
        <div className='col'>  
            <div className='card text-center'>
               <div className='card-header  bg-transparent'>
                  <h5 className='text-muted fw-light'>Free</h5>
                  <h2 className='card-title'> $0/month </h2>
               </div>

               <div className='card-body'>
                    <ul className='list'>
                       <li> <span className="fa-li"><i className="fas fa-check"></i> </span> Single User</li>
                       <li> <span className="fa-li"><i className="fas fa-check"></i> </span> 50GB Storage</li>
                       <li> <span className="fa-li"><i className="fas fa-check"></i> </span> Unlimited Public Projects</li>
                       <li> <span className="fa-li"><i className="fas fa-check"></i> </span> Community Access</li>
                       <li className="text-muted"> <span className="fa-li"> <i className="fas fa-times"> </i> </span> Unlimited Private Projects</li>
                       <li className="text-muted"> <span className="fa-li"> <i className="fas fa-times"> </i> </span> Dedicated Phone Support</li>
                       <li className="text-muted"> <span className="fa-li"> <i className="fas fa-times"> </i> </span> Free Subdomain</li>
                       <li className="text-muted"> <span className="fa-li"> <i className="fas fa-times"> </i> </span> Monthly Status Reports</li>
                    </ul>
                    
                    <button className='btn btn-lg w-100 btn btn-primary'>Button</button>
               </div>
            </div>
        </div>

        <div className="col">  
            <div className="card text-center">
               <div className='card-header  bg-transparent'>
               <h5 className='text-muted fw-light'>Plus</h5>
               <h2 className='card-title'> $9/month </h2>
               </div>

               <div className='card-body'>
               <ul className='list'>
                       <li><span className="fa-li"><i className="fas fa-check"></i> </span> 5 User</li>
                       <li><span className="fa-li"><i className="fas fa-check"></i> </span> 50GB Storage</li>
                       <li><span className="fa-li"><i className="fas fa-check"></i> </span> Unlimited Public Projects</li>
                       <li><span className="fa-li"><i className="fas fa-check"></i> </span> Community Access</li>
                       <li><span className="fa-li"><i className="fas fa-check"></i> </span> Unlimited Private Projects</li>
                       <li><span className="fa-li"><i className="fas fa-check"></i> </span> Dedicated Phone Support</li>
                       <li><span className="fa-li"><i className="fas fa-check"></i> </span> Free Subdomain</li>
                       <li className="text-muted"> <span className="fa-li"> <i className="fas fa-times"> </i> </span> Monthly Status Reports</li>
                    </ul>

                    <button className='btn btn-lg w-100 btn btn-primary'>Button</button>
               </div>
            </div>
        </div>

        <div className="col">  
            <div className="card text-center">
               <div className='card-header  bg-transparent'>
               <h5 className='text-muted fw-light'>Pro</h5>
               <h2 className='card-title'> $49/month </h2>
               </div>

               <div className='card-body'>  
               <ul className='list'>
                       <li><span className="fa-li"><i className="fas fa-check"></i> </span> Unlimited User</li>
                       <li><span className="fa-li"><i className="fas fa-check"></i> </span> 50GB Storage</li>
                       <li><span className="fa-li"><i className="fas fa-check"></i> </span> Unlimited Public Projects</li>
                       <li><span className="fa-li"><i className="fas fa-check"></i> </span> Community Access</li>
                       <li><span className="fa-li"><i className="fas fa-check"></i> </span> Unlimited Private Projects</li>
                       <li><span className="fa-li"><i className="fas fa-check"></i> </span> Dedicated Phone Support</li>
                       <li><span className="fa-li"><i className="fas fa-check"></i> </span> Free Subdomain</li>
                       <li><span className="fa-li"><i className="fas fa-check"></i> </span> Monthly Status Reports</li>
                    </ul>

                    <button className='btn btn-lg w-100 btn btn-primary'>Button</button>
               </div>
            </div>
        </div>
    </div>
  </div>
  )
}

export default App
