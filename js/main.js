function activate(){
    let a=document.getElementById('link').value;
    let b=document.getElementById('offer').value;
    let c=document.getElementById('desc').value;

    var br= document.createElement('br');
    var outer= document.createElement('div');
    outer.id='spotlight-banner';
    outer.className='spotlight-banner';
    var imgTag=document.createElement('img');
    imgTag.src=a;
    imgTag.className='spotlight-banner-img';
    var contDiv=document.createElement('div');
    contDiv.className='banner-content';
    contDiv.id='banner-content';
    var innerDiv=document.createElement('div');
    innerDiv.className='inner-content';
    var disc=document.createElement('span');
    disc.className='discount';
    disc.textContent=b;
    var desc=document.createElement('span');
    desc.className='discription';
    desc.textContent=c;
    innerDiv.appendChild(disc);
    innerDiv.appendChild(br);
    innerDiv.appendChild(desc);
    contDiv.appendChild(innerDiv);
    outer.appendChild(imgTag);
    outer.appendChild(contDiv);
    document.getElementById('inside-spotlight').appendChild(outer);
}