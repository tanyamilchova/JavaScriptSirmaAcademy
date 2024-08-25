import ServiceCard from "./ServiceCard";
export default function Service(){
    return (
        <section className="service_section layout_padding">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>
          Our Services
        </h2>
      </div>
    </div>
    <div className="container ">
      <div className="row">
        <ServiceCard title="Shared Hosting" 
          image="images/s1.png" alt="" 
          description="Generators on the Internet tend to repeat predefined chunks as necessary"
        />
     
        <ServiceCard title="  Dedicated Hosting" 
          image="images/s2.png" 
          description="Generators on the Internet tend to repeat predefined chunks as necessary"
         />
      
        <ServiceCard title="  Cloud Hosting" 
          image="images/s3.png" 
          description="Generators on the Internet tend to repeat predefined chunks as necessary"
         />
      
          <ServiceCard title="   VPS Hosting" 
            image="images/s4.png" 
            description="Generators on the Internet tend to repeat predefined chunks as necessary"
         />
     
         <ServiceCard title="   Wordpress Hosting" 
            image="images/s5.png" 
            description="Generators on the Internet tend to repeat predefined chunks as necessary"
         />
      
          <ServiceCard title="    Domain Name" 
            image="images/s6.png" 
            description="Generators on the Internet tend to repeat predefined chunks as necessary"
         />
    
      </div>
    </div>
  </section>
    );
}