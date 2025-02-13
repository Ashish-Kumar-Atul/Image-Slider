document.addEventListener('DOMContentLoaded', () => {
    const images = [
        'Images/slider1.jpeg',
        'Images/slider2.jpeg',
        'Images/slider3.jpeg',
        'Images/slider4.jpeg',
        'Images/slider5.jpeg',
        'Images/slider6.jpeg'
    ]

    let index = 0;

    const sliderImage = document.getElementById('sliderImage');
    const prevbtn = document.getElementById('prevBtn');
    const nextbtn = document.getElementById('nextbtn');

    // const updateImage = () => {
    //     sliderImage.src = images[currentIndex];
    // };

    // prevBtn.addEventListener('click', () => {
    //     currentIndex = (currentIndex - 1 + images.length) % images.length;
    //     updateImage();
    // });

    // nextBtn.addEventListener('click', () => {
    //     currentIndex = (currentIndex + 1) % images.length;
    //     updateImage();  
    // });

    prevbtn.addEventListener('click',()=>{
        if (index >= 0 && index < images.length){
                sliderImage.src = images[index];
                index--;
            }
            else if(index<0){
                index=images.length-1;
                sliderImage.src = images[index];
            }
    })
    nextbtn.addEventListener('click',()=>{
        if (index >= 0 && index<images.length){
                sliderImage.src = images[index];
                index++;
            }
            else if(index>images.length-1){
                index=0;
                sliderImage.src = images[index];
            }
    })
    
});

