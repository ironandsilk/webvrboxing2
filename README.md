MVP
=================

## Scene decription 
### Dummy
 - a standing punching bag 

### User
 - with hands
 
### MPV interaction
-  Hands hit dummy
-  then dummy changes color
example of changing color: 
"https://glitch.com/edit/#!/aframechange-bg?path=index.html:59:23"



Scene Information Architecture (pages)
------------

### ← index.html

Scene 1 - with the menu UI
look at the --> button to launch interactive scene

### ← scene2.html

interactive scene look at things to make them dissapear

### ← scene3.html

the MVP with hands

#### we should probably use the EventSet component
https://www.npmjs.com/package/aframe-event-set-component

##### event set example like

   <a-box color="green"
           event-set__click="material.color: red; scale: 2 2 2"
           event-set__mouseenter="material.color: blue"></a-box>
              
                                                                

#### here it the HTML for hands                                                           
<a-entity id="leftHand" hand-controls="hand: left; handModelStyle: lowPoly; color: #ffcccc"
      dynamic-body
        >
      </a-entity>
<a-entity id="rightHand" hand-controls="hand: right; handModelStyle: lowPoly; color: #ffcccc"
      static-body></a-entity>




this scene has physics but it doesn't need physics