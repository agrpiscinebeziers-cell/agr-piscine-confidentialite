import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{$r as t,C as n,Vn as r,at as i,gt as a,lt as o,ni as s,wr as c}from"./drei-KJ7Xs0qk.js";import{a as l,c as u,i as d,l as f,n as p,o as m,r as h,s as g,t as _,u as v}from"./messagesThree-bibkMjRr.js";import{t as y}from"./react-DlmbjZJV.js";import{i as b,n as x,r as S}from"./branchement-DJOtSbiS.js";import{$r as C,An as w,B as T,Cr as E,Ct as D,D as O,Dn as ee,Dt as te,E as ne,Ft as re,Gr as ie,H as k,In as ae,Ir as oe,It as se,J as ce,Ln as A,Mr as le,Mt as ue,Nn as de,Nt as fe,On as pe,Ot as me,Q as he,Qr as j,Qt as ge,Rr as _e,Rt as ve,Sr as M,Tn as ye,Tt as be,U as N,V as xe,Vr as Se,Wn as Ce,Wr as we,Y as Te,Yr as Ee,Yt as De,Z as P,Zr as F,cn as Oe,cr as ke,ct as Ae,dn as je,dr as Me,fn as Ne,ft as Pe,gn as Fe,gt as Ie,ht as Le,i as Re,jn as ze,jt as Be,kn as Ve,kt as He,mt as Ue,ni as We,nt as Ge,p as I,pr as Ke,q as qe,qr as Je,r as Ye,st as Xe,un as L,ur as Ze,ut as Qe,wr as $e,xn as et,xr as tt,xt as nt,y as R,yn as rt,yr as it,zr as at}from"./events-e51d7528.esm-DsRnLYSC.js";import{n as ot,t as st}from"./equipment-BvGesr9t.js";import{n as ct,t as lt}from"./tour-CajRhAfD.js";import{t as ut}from"./react-D1MzK91C.js";import{n as dt,s as ft}from"./moteur-9gRtGItu.js";import{D as pt,O as mt,S as ht,T as gt,_ as _t,a as vt,b as yt,d as bt,f as z,g as xt,i as St,j as Ct,k as wt,l as Tt,p as Et,r as Dt,t as Ot,v as kt,x as At,y as jt}from"./store-DuQ_WV0n.js";import{S as Mt,_ as Nt,a as Pt,b as Ft,c as It,f as Lt,g as Rt,h as zt,i as B,l as Bt,m as Vt,p as Ht,r as Ut,s as Wt,t as Gt,v as Kt,x as qt,y as Jt}from"./qualite-Oti1v-aM.js";import{t as V}from"./rendu.config-_l1SOCUU.js";import{n as Yt,r as H,t as Xt}from"./actif-D7Wki9TJ.js";import{t as Zt}from"./jsx-runtime-LKYXHABd.js";import{n as Qt,t as $t}from"./cameraLibre-DZUqcYBL.js";import{a as en,c as tn,i as nn,n as rn,o as an,s as on,t as sn}from"./qualiteAuto-DhfZK8DO.js";import{a as cn,c as ln,i as un,o as dn,r as fn,s as pn,t as mn}from"./modeles3d-CEX2nvVX.js";import{t as hn}from"./use-reduced-motion-gNFDjxWk.js";import{n as gn}from"./icones-Bn4TJaXh.js";import{i as _n}from"./mode-DTWJM8KJ.js";import{a as vn,l as yn,o as bn}from"./secours3d-Dy1-k0-e.js";import{c as xn}from"./natif-DyWVeQHh.js";var U=e(y(),1),Sn=`RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );`;function Cn(e,t,n){let r=e.indexOf(n),i=r<0?-1:e.indexOf(Sn,r);if(i<0)return e;let a=i+127;return`${e.slice(0,r)}if ( ${t}.color != vec3( 0.0 ) ) {\n\t\t${e.slice(r,a)}\n\t\t}${e.slice(a)}`}(()=>{if(!Nt(`lampes`))return!1;let e=O.lights_fragment_begin,t=Cn(Cn(e,`pointLight`,`getPointLightInfo( pointLight`),`spotLight`,`getSpotLightInfo( spotLight`);return O.lights_fragment_begin=t,t.split(`.color != vec3( 0.0 ) ) {`).length===3})();var wn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},Tn=new ee(-1,1,1,-1,0,1),En=new class extends N{constructor(){super(),this.setAttribute(`position`,new be([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new be([0,2,0,0,2,0],2))}},Dn=class{constructor(e){this._mesh=new je(En,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Tn)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},On=It,kn=On?256:512,An=On?128:256,jn=On?.985:.9925,Mn=On?3:6,Nn=8,Pn=On?60:120,W={x0:-7,x1:1,z0:-2,z1:2},Fn={uTex:{value:null},uTexel:{value:new F(1/kn,1/An)},uForce:{value:0}},In=[];function Ln(e,t,n=.07,r=.012){e<0||e>1||t<0||t>1||In.length<64&&In.push({u:e,v:t,rayon:n,force:r})}var Rn={vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,fragmentShader:`
    uniform sampler2D tEtat;   // rouge : hauteur ; vert : hauteur au pas précédent
    uniform vec2 uTexel;
    uniform vec4 uGouttes[${Nn}]; // position (0…1), rayon (en largeurs de bassin), force
    uniform float uAspect;
    varying vec2 vUv;
    void main() {
      vec4 s = texture2D(tEtat, vUv);
      float h = s.r;
      float voisins = texture2D(tEtat, vUv + vec2(uTexel.x, 0.0)).r + texture2D(tEtat, vUv - vec2(uTexel.x, 0.0)).r
                    + texture2D(tEtat, vUv + vec2(0.0, uTexel.y)).r + texture2D(tEtat, vUv - vec2(0.0, uTexel.y)).r;
      // équation des ondes : chaque point est tiré vers la moyenne de ses voisins, puis amorti
      float n = (2.0 * h - s.g + 0.24 * (voisins - 4.0 * h)) * ${jn};
      for (int i = 0; i < ${Nn}; i++) {
        vec4 g = uGouttes[i];
        vec2 d = (vUv - g.xy) * vec2(uAspect, 1.0);
        n += g.w * exp(-dot(d, d) / max(g.z * g.z, 1e-6));
      }
      gl_FragColor = vec4(clamp(n, -0.2, 0.2), h, 0.0, 1.0);
    }`},zn=class{a;b;quad;mat;reste=0;largeurM;constructor(e,t){let n=()=>{let e=new We(kn,An,{type:ue,format:Ce,depthBuffer:!1,magFilter:ge,minFilter:ge,wrapS:Te,wrapT:Te});return e.texture.generateMipmaps=!1,e};this.a=n(),this.b=n(),this.largeurM=t,this.mat=new M({...Rn,uniforms:{tEtat:{value:null},uTexel:Fn.uTexel,uGouttes:{value:Array.from({length:Nn},()=>new C(0,0,1,0))},uAspect:{value:e/t}},depthTest:!1,depthWrite:!1}),this.quad=new Dn(this.mat)}avancer(e,t){this.reste+=Math.min(t,.1)*Pn;let n=Math.min(Mn,Math.floor(this.reste));if(n<=0)return;this.reste-=n;let r=e.getRenderTarget(),i=this.mat.uniforms.uGouttes.value;for(let t=0;t<n;t++){for(let e=0;e<Nn;e++){let n=t===0?In.shift():void 0;n?i[e].set(n.u,n.v,n.rayon/this.largeurM,n.force):i[e].w=0}this.mat.uniforms.tEtat.value=this.a.texture,e.setRenderTarget(this.b),this.quad.render(e),[this.a,this.b]=[this.b,this.a]}e.setRenderTarget(r),Fn.uTex.value=this.a.texture}dispose(){this.a.dispose(),this.b.dispose(),this.quad.dispose(),this.mat.dispose(),Fn.uTex.value=null}},Bn=new Set,Vn=new Set,Hn=6,Un=21,Wn=Math.PI/180,Gn=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)},Kn={valeur:Yt,defile:!1},qn=new Set;function Jn(e){Kn.valeur=(e%24+24)%24,qn.forEach(e=>e())}function Yn(e){Kn.defile=e,qn.forEach(e=>e())}function Xn(e){return qn.add(e),()=>void qn.delete(e)}function Zn(e,t,n){let r=Math.sin(e)*t*Wn;return n.set(-Math.cos(e)*Math.cos(r),Math.sin(r),-Math.sin(e)*Math.cos(r)).normalize()}var Qn=new P(`#ff7a2b`),$n=new P(`#ffd7a3`),er=new P(`#fff3e2`),tr=new P(`#a9c1ff`);function nr(e,t=rr()){let n=e>=Hn&&e<Un,r=n?(e-Hn)/15*Math.PI:Math.PI+((e-Un)%24+24)%24/9*Math.PI;Zn(r,n?64:40,t.soleil),Zn(r-Math.PI+.35,n?30:48,t.lune);let i=t.soleil.y,a=t.lune.y;t.nuit=1-Gn(-.16,.08,i),t.crepuscule=Gn(-.22,.02,i)*(1-Gn(.05,.42,i)),t.teinteSoleil.copy(Qn).lerp($n,Gn(.03,.5,i)).lerp(er,Gn(.55,.9,i));let o=4.9*Gn(-.03,.32,i),s=.5*Gn(0,.3,a),c=i>-.03;t.couleur.copy(c?t.teinteSoleil:tr),t.intensite=c?o:s;let l=c?t.soleil:t.lune,u=Math.max(Math.asin(Math.min(1,Math.max(-1,l.y))),12*Wn),d=Math.hypot(l.x,l.z)||1;t.lumiere.set(l.x/d*Math.cos(u),Math.sin(u),l.z/d*Math.cos(u));let f=Gn(-.1,.3,i);return t.horizon.setRGB(.016+.324*f,.026+.534*f,.055+(.98-.055)*f),t.horizon.lerp(new P(.78,.5,.42),t.crepuscule*.6),t.exposition=.9+.35*t.nuit,t}function rr(){return{soleil:new j,lune:new j,lumiere:new j,couleur:new P,intensite:0,teinteSoleil:new P,nuit:0,crepuscule:0,horizon:new P,exposition:1}}var ir=e=>`${Math.floor(e)} h ${String(Math.round(e%1*60)%60).padStart(2,`0`)}`,G=nr(Kn.valeur),K=Zt(),ar=typeof matchMedia<`u`&&matchMedia(`(prefers-reduced-motion: reduce)`).matches,or=72,sr={pos:new Float32Array(216),vit:new Float32Array(216),age:new Float32Array(or).fill(9),vie:new Float32Array(or).fill(1),suivante:0};function cr(e,t,n,r=1){if(!ar)for(let i=0;i<12;i++){let i=sr.suivante;sr.suivante=(i+1)%or;let a=Jt()*Math.PI*2,o=.25+Jt()*.75;sr.pos.set([e+Math.cos(a)*.03,t+.01,n+Math.sin(a)*.03],i*3),sr.vit.set([Math.cos(a)*o*.75*r,(1.5+Jt()*1.3)*r,Math.sin(a)*o*.75*r],i*3),sr.age[i]=0,sr.vie[i]=.45+Jt()*.4}}var lr={vertexShader:`
    attribute float aVie; // 1 à la naissance, 0 à la fin
    uniform float uEchelle;
    varying float vVie;
    void main() {
      vVie = aVie;
      vec4 mv = modelViewMatrix * vec4(position, 1.0);
      gl_Position = aVie > 0.0 ? projectionMatrix * mv : vec4(2.0, 2.0, 2.0, 1.0);
      gl_PointSize = clamp(0.022 * (0.5 + aVie) * uEchelle / max(-mv.z, 0.3), 1.0, 14.0);
    }`,fragmentShader:`
    uniform vec3 uLumiere;
    varying float vVie;
    void main() {
      vec2 c = gl_PointCoord - 0.5;
      float a = smoothstep(0.5, 0.2, length(c)) * smoothstep(0.0, 0.25, vVie) * 0.85;
      if (a < 0.01) discard;
      // petit éclat de lumière en haut à gauche de chaque goutte
      float eclat = smoothstep(0.16, 0.0, length(c - vec2(-0.12, -0.14)));
      gl_FragColor = vec4((vec3(0.72, 0.88, 0.96) + eclat * 1.6) * uLumiere, a);
    }`};function ur({couche:e,apresEau:t}){let n=R(e=>e.size.height),r=(0,U.useMemo)(()=>{let e=new N;e.setAttribute(`position`,new k(sr.pos,3)),e.setAttribute(`aVie`,new k(new Float32Array(or),1));let t=new de(e,new M({...lr,uniforms:{uEchelle:{value:1e3},uLumiere:{value:new P(1,1,1)}},transparent:!0,depthWrite:!1}));return t.frustumCulled=!1,t.raycast=()=>{},t},[]);return(0,U.useLayoutEffect)(()=>(Bn.add(r),r.layers.set(e),t.add(r),()=>{Bn.delete(r),t.delete(r),r.geometry.dispose(),r.material.dispose()}),[r,e,t]),I(({camera:e,gl:t},i)=>{let a=Math.min(i,.05),o=r.geometry.attributes.aVie,s=!1;for(let e=0;e<or;e++)if(sr.age[e]>=sr.vie[e])o.setX(e,0);else{s=!0,sr.age[e]+=a,sr.vit[e*3+1]-=9.81*a;for(let t=0;t<3;t++)sr.pos[e*3+t]+=sr.vit[e*3+t]*a;o.setX(e,Math.max(0,1-sr.age[e]/sr.vie[e]))}if(o.needsUpdate=!0,!s)return;r.geometry.attributes.position.needsUpdate=!0;let c=r.material.uniforms;c.uEchelle.value=n*t.getPixelRatio()/(2*Math.tan(e.fov*Math.PI/360)),c.uLumiere.value.copy(G.couleur).multiplyScalar(Math.min(1.1,.12+G.intensite/4.2))}),(0,K.jsx)(`primitive`,{object:r})}function dr({jets:e,niveau:t,couche:n,apresEau:r}){let i=R(e=>e.gl),a=R(e=>e.camera),o=z(e=>e.pumpOn),s=(0,U.useMemo)(()=>new zn(W.x1-W.x0,W.z1-W.z0),[]);(0,U.useEffect)(()=>(Fn.uForce.value=1,()=>{Fn.uForce.value=0,s.dispose()}),[s]),(0,U.useEffect)(()=>{let e=new Ze,n=new F,r=null,o=r=>{if(r.target!==i.domElement)return null;let o=i.domElement.getBoundingClientRect();n.set((r.clientX-o.left)/o.width*2-1,-((r.clientY-o.top)/o.height)*2+1),e.setFromCamera(n,a);let{origin:s,direction:c}=e.ray;if(c.y>=-1e-4)return null;let l=(t-s.y)/c.y,u=(s.x+c.x*l-W.x0)/(W.x1-W.x0),d=(s.z+c.z*l-W.z0)/(W.z1-W.z0);return u>0&&u<1&&d>0&&d<1?[u,d]:null},s=e=>{let n=o(e);n&&(Ln(n[0],n[1],.1,.022),a.position.y>t&&cr(W.x0+n[0]*(W.x1-W.x0),t,W.z0+n[1]*(W.z1-W.z0)))},c=e=>{let t=o(e);if(!t)return void(r=null);r&&Math.hypot((t[0]-r[0])*(W.x1-W.x0),(t[1]-r[1])*(W.z1-W.z0))<.12||(r=t,Ln(t[0],t[1],.055,e.pressure>0&&e.pointerType!==`mouse`?.012:.006))};return window.addEventListener(`pointerdown`,s,{passive:!0}),window.addEventListener(`pointermove`,c,{passive:!0}),()=>{window.removeEventListener(`pointerdown`,s),window.removeEventListener(`pointermove`,c)}},[i,a,t]);let c=(0,U.useRef)(2);return I(({clock:t},n)=>{if(!ar){if(o)for(let[t,r]of e)Ln((t-.12-Jt()*.2-W.x0)/(W.x1-W.x0),(r+(Jt()-.5)*.16-W.z0)/(W.z1-W.z0),.06,(Jt()-.5)*.0012*Math.min(n,.05)*60);t.elapsedTime>c.current&&(c.current=t.elapsedTime+1.2+Jt()*3,Ln(.04+Jt()*.92,.06+Jt()*.88,.05,.005+Jt()*.006))}s.avancer(i,n)}),(0,K.jsx)(ur,{couche:n,apresEau:r})}var fr=V.eau,pr=(e,t)=>{},mr=-.12,q={uTime:{value:0},uSun:{value:new j(.45,.75,.35).normalize()},uCiel:{value:null},uLineaire:{value:0},uScene:{value:null},uReflet:{value:null},uRefletMatrice:{value:new L},uRefletActif:{value:0},surface:null,apres:new Set,uBrumeCouleur:{value:new P(0,0,0)},uBrumeDist:{value:new F(1e9,1e9+1)},uVolet:{value:new F(1e6,1e6)},uAstre:{value:new P(1,.93,.8)},uProjecteur:{value:new C(-6.8,-.62,0,0)},uProjCouleur:{value:new P(.62,.86,1)}},hr=()=>new j(...fr.absorption),gr=`
  uniform vec4 uPool;      // x0, x1, z0, z1
  uniform float uDepth;    // profondeur du fond
  uniform vec3 uBench;     // x début de la banquette, hauteur du dessus, actif (0/1)
  uniform float uPlage;    // x du début de la banquette : au-delà, l'eau garde la teinte du bassin profond
  uniform vec2 uJets[3];   // buses de refoulement (x, z)
  uniform vec2 uVolet;     // tablier du volet posé sur l'eau (x de début et de fin) : l'eau n'y est pas dessinée
  float epaisseur(vec3 s, vec3 d) {
    float t = (s.y + uDepth) / max(-d.y, 0.05);
    vec3 p = s + d * t;
    if (uBench.z > 0.5 && p.x > uBench.x) t = min(t, (s.y - uBench.y) / max(-d.y, 0.05));
    if (d.x > 0.0) t = min(t, (uPool.y - s.x) / d.x); else if (d.x < 0.0) t = min(t, (uPool.x - s.x) / d.x);
    if (d.z > 0.0) t = min(t, (uPool.w - s.z) / d.z); else if (d.z < 0.0) t = min(t, (uPool.z - s.z) / d.z);
    return max(t, 0.0);
  }
  #define RECIP_PI 0.3183098861837907
  #define RECIP_PI2 0.15915494309189535
  uniform sampler2D uEnv;
  vec3 ciel(vec3 d) {
    vec2 uv = vec2(atan(d.z, d.x) * RECIP_PI2 + 0.5, asin(clamp(d.y, -1.0, 1.0)) * RECIP_PI + 0.5);
    return texture2D(uEnv, uv).rgb;
  }
`,_r=`
  varying vec3 vWorld;
  varying vec4 vClip;
  varying float vVueZ;
  void main() {
    vec4 w = modelMatrix * vec4(position, 1.0);
    vWorld = w.xyz;
    vec4 v = viewMatrix * w;
    vVueZ = -v.z;
    vClip = projectionMatrix * v;
    gl_Position = vClip;
  }
`,vr=`
  ${gr}
  uniform mat4 projectionMatrix; // fournie par three.js (déclarée d'office seulement pour les sommets)
  uniform float uTime;
  uniform vec3 uSun;
  uniform sampler2D uNormales;
  uniform vec4 uVague1;    // vitesse x, vitesse z (tailles/s), taille (m)
  uniform vec4 uVague2;
  uniform float uForce;
  uniform sampler2D uScene;
  uniform vec3 uAbsorb;
  uniform vec3 uScatter;
  uniform float uRefraction;
  uniform float uEnvIntensity;
  uniform sampler2D uReflet;
  uniform mat4 uRefletMatrice;
  uniform float uRefletActif;
  uniform float uBrillance;
  uniform float uSoleilForce;
  uniform float uLigne;
  uniform vec3 uBrumeCouleur;
  uniform vec2 uBrumeDist;
  uniform vec3 uAstre;
  ${H?`uniform sampler2D uOndes; uniform vec2 uOndesTexel; uniform float uOndesForce; uniform vec4 uProjecteur; uniform vec3 uProjCouleur;`:``}
  varying vec3 vWorld;
  varying vec4 vClip;
  varying float vVueZ;

  // pente (dh/dx, dh/dz) d'une couche de vaguelettes, et longueur de la normale lue (< 1 quand la texture est vue
  // de loin : ses vaguelettes se moyennent, l'eau paraît plus lisse et le soleil s'y étale)
  vec3 couche(vec2 p, vec4 c) {
    vec3 t = texture2D(uNormales, p / c.z + c.xy * uTime).xyz * 2.0 - 1.0;
    // la texture code la normale (-pente x, -pente z, 1)
    return vec3(-t.xy / max(t.z, 0.25), length(t));
  }

  void main() {
    if (vWorld.x > uVolet.x && vWorld.x < uVolet.y) discard;
    vec2 p = vWorld.xz;
    vec3 a = couche(p, uVague1);
    vec3 b = couche(p + vec2(0.37, 0.71), uVague2);
    vec2 pente = (a.xy + b.xy) * uForce;
    float lg = clamp((a.z + b.z) * 0.5, 0.0, 1.0);
    // ondes qui partent des buses de refoulement, estompées quand elles deviennent plus fines qu'un pixel
    float px = max(length(fwidth(p)), 1e-4);
    float kj = 0.035 * (1.0 - smoothstep(0.18, 0.45, px * 6.0)) * uForce;
    if (kj > 0.0) for (int i = 0; i < 3; i++) {
      vec2 dp = p - uJets[i];
      float d = max(length(dp), 1e-3);
      float e = exp(-d * 2.2) * kj;
      pente += dp / d * e * 0.1 * (38.0 * cos(d * 38.0 - uTime * 7.0) - 2.2 * sin(d * 38.0 - uTime * 7.0));
    }
    ${H?`// ondes vivantes (refonte/ondes.ts) : pente de la surface calculée, estompée quand elle devient plus fine qu'un pixel
    if (uOndesForce > 0.0) {
      vec2 uo = (p - uPool.xz) / (uPool.yw - uPool.xz);
      float oX = texture2D(uOndes, uo + vec2(uOndesTexel.x, 0.0)).r - texture2D(uOndes, uo - vec2(uOndesTexel.x, 0.0)).r;
      float oZ = texture2D(uOndes, uo + vec2(0.0, uOndesTexel.y)).r - texture2D(uOndes, uo - vec2(0.0, uOndesTexel.y)).r;
      pente += vec2(oX, oZ) / (2.0 * (uPool.y - uPool.x) * uOndesTexel.x) * uOndesForce * (1.0 - smoothstep(0.03, 0.14, px));
    }
    // vraies vagues (Gerstner) : quatre trains de vaguelettes poussés par le même vent que la végétation, chacun à
    // la vitesse que lui donne sa longueur d'onde (les longues vont plus vite), crêtes resserrées et creux élargis.
    // Hauteurs de bassin abrité : 2 à 6 mm. Estompées quand elles deviennent plus fines qu'un pixel.
    {
      float fin = 1.0 - smoothstep(0.02, 0.12, px);
      for (int i = 0; i < 4; i++) {
        float fi = float(i);
        float lambda = 1.7 * pow(0.58, fi);
        float kk = 6.2831853 / lambda;
        float amp = 0.006 * pow(0.62, fi);
        float angle = 0.556 + (fi - 1.5) * 0.42;
        vec2 dv = vec2(cos(angle), sin(angle));
        float ph = dot(dv, p) * kk - sqrt(9.81 * kk) * uTime * 0.55 + fi * 1.9;
        pente += dv * (kk * amp * cos(ph) / (1.0 - 0.6 * kk * amp * sin(ph))) * fin * (uForce / 0.3);
      }
    }`:``}
    vec3 n = normalize(vec3(-pente.x, 1.0, -pente.y));
    vec3 v = normalize(cameraPosition - vWorld);
    ${H?`// caméra sous l'eau : la surface vue de dessous. Au-dessus de soi, une « fenêtre » ronde où l'on voit le ciel ;
    // autour, la surface devient un miroir qui renvoie le bleu du bassin (réflexion totale).
    if (cameraPosition.y < ${mr.toFixed(3)}) {
      vec3 regard = -v;
      vec3 nb = -n;
      vec3 sortie = refract(regard, nb, 1.33);
      float fenetre = dot(sortie, sortie) > 0.0 ? smoothstep(0.0, 0.25, sortie.y) : 0.0;
      vec3 haut = normalize(vec3(sortie.x, max(sortie.y, 0.06), sortie.z));
      float lumB = clamp(dot(uAstre, vec3(0.37)), 0.03, 1.0);
      vec3 dessus = min(ciel(haut), vec3(4.0)) * 0.9 + uAstre * pow(max(dot(haut, uSun), 0.0), 180.0) * 14.0;
      // le miroir renvoie le fond et les parois : on cherche où le regard réfléchi touche le bassin, et on lit ce
      // point dans l'image de la scène (s'il est à l'écran)
      vec3 retour = reflect(regard, nb);
      retour = normalize(vec3(retour.x, min(retour.y, -0.03), retour.z));
      float trajet = epaisseur(vWorld, retour);
      vec4 cr = projectionMatrix * viewMatrix * vec4(vWorld + retour * trajet, 1.0);
      vec2 ur = cr.xy / max(cr.w, 1e-3) * 0.5 + 0.5;
      vec3 teinteEau = uScatter * lumB * 1.6 + uProjCouleur * uProjecteur.w * 0.25;
      float alEcran = cr.w > 0.0 ? smoothstep(0.0, 0.07, min(min(ur.x, 1.0 - ur.x), min(ur.y, 1.0 - ur.y))) : 0.0;
      vec3 miroir = mix(teinteEau, texture2D(uScene, clamp(ur, 0.0, 1.0)).rgb, alEcran);
      vec3 abB = uAbsorb * 1.45;
      miroir = miroir * exp(-abB * trajet * 0.8) + teinteEau * (1.0 - exp(-abB * trajet * 0.55));
      gl_FragColor = vec4(mix(miroir, dessus, fenetre), 1.0);
      return;
    }`:``}

    // fond vu à travers l'eau : point de la scène derrière la surface, déplacé par la réfraction
    vec2 uv0 = vClip.xy / vClip.w * 0.5 + 0.5;
    vec4 s0 = texture2D(uScene, uv0);
    float k = length(cameraPosition - vWorld) / max(vVueZ, 1e-3); // distance réelle / distance dans l'axe de vue
    vec3 r = refract(-v, n, 1.0 / 1.33);
    // longueur dans l'eau, bornée par la forme du bassin (rayons X : parois transparentes)
    float maxi = epaisseur(vWorld, r);
    float prof0 = min(max(s0.a - vVueZ, 0.0) * k, maxi);
    vec3 deplace = vWorld + vec3(n.x, 0.0, n.z) * uRefraction * min(prof0, 1.5);
    vec4 c2 = projectionMatrix * viewMatrix * vec4(deplace, 1.0);
    vec4 s = texture2D(uScene, c2.xy / c2.w * 0.5 + 0.5);
    // le point déplacé doit être sous la surface : sinon (margelle, volet, haut de paroi hors de l'eau), pas de
    // déplacement, et pas de liseré en dents de scie le long des parois
    float yS = cameraPosition.y + normalize(deplace - cameraPosition).y * s.a * k;
    if (s.a < vVueZ || yS > ${(-.124).toFixed(3)}) s = s0;
    float prof = min(max(s.a - vVueZ, 0.0) * k, maxi);
    // banquette et sa marche : même teinte que le reste du bassin (pas de rectangle plus clair)
    if ((vWorld + r * prof).x > uPlage - 0.04) prof = maxi;
    // la lumière descend jusqu'au point (un peu en biais) puis remonte vers l'œil
    float descente = prof * v.y * 1.15;
    // absorption réglée comme pour l'eau simple (qui travaille en couleurs d'écran) : ×1,45 en lumière physique
    vec3 ab = uAbsorb * 1.45;
    vec3 fond = s.rgb * exp(-ab * (prof + descente));
    vec3 diffusion = uScatter * (1.0 - exp(-ab * prof * 0.8));
    ${H?`// la lueur propre de l'eau suit la lumière du moment (presque éteinte la nuit)
    diffusion *= clamp(dot(uAstre, vec3(0.37)), 0.02, 1.0);
    // projecteur allumé : halo de lumière dans l'eau, le long du trajet du regard
    if (uProjecteur.w > 0.001) {
      vec3 seg = r * prof;
      float tt = clamp(dot(uProjecteur.xyz - vWorld, seg) / max(dot(seg, seg), 1e-4), 0.0, 1.0);
      vec3 pc = vWorld + seg * tt;
      float dl = distance(pc, uProjecteur.xyz);
      float cone = 0.3 + 0.7 * smoothstep(-0.3, 0.9, (pc.x - uProjecteur.x) / max(dl, 0.05));
      diffusion += uProjCouleur * uProjecteur.w * cone * min(prof, 1.6) * 0.5 / (0.3 + dl * dl);
    }`:``}

    // reflet : ciel (sans la ligne d'horizon de l'image, qui faisait des traînées), ou décor réel (qualité haute)
    float fres = 0.02 + 0.98 * pow(1.0 - max(dot(n, v), 0.0), 5.0);
    ${H?`fres = min(fres, 0.62); // vue rasante : le reflet ne couvre jamais toute la couleur de l eau`:``}
    vec3 refl = reflect(-v, n);
    vec3 rc = normalize(vec3(refl.x, max(abs(refl.y), 0.14), refl.z));
    vec3 reflet = min(ciel(rc), vec3(3.0));
    if (uRefletActif > 0.5) {
      vec4 q = uRefletMatrice * vec4(vWorld + vec3(n.x, 0.0, n.z) * 0.06, 1.0);
      reflet = texture2D(uReflet, q.xy / q.w).rgb;
    }
    reflet *= uEnvIntensity;

    // éclats du soleil : nets de près ; au loin (vaguelettes moyennées) plus larges et moins forts, sans scintiller
    float brill = uBrillance * lg / (lg + uBrillance * (1.0 - lg) + 1e-4);
    float rs = max(dot(refl, uSun), 0.0);
    float spec = pow(rs, max(brill, 8.0)) * (brill + 2.0) * 0.159 * uSoleilForce * 0.06;
    // liseré de la ligne d'eau, contre les parois
    float ligne = uLigne * (1.0 - smoothstep(0.0, 0.035, prof)) * (1.0 - smoothstep(0.0, 0.6, px * 20.0));

    vec3 col = (fond + diffusion) * (1.0 - fres) + reflet * fres + uAstre * min(spec, 40.0) + vec3(0.75, 0.9, 0.95) * ligne${H?` * clamp(dot(uAstre, vec3(0.37)), 0.05, 1.0)`:``};
    // même brume lointaine que le reste de la scène
    col = mix(col, uBrumeCouleur, smoothstep(uBrumeDist.x, uBrumeDist.y, vVueZ));
    gl_FragColor = vec4(col, 1.0);
  }
`;function yr({x0:e,x1:t,z0:n,z1:r,depth:i,banquette:a=null,plage:o=null,jets:s=[]},c){return{uTime:q.uTime,uSun:q.uSun,uLineaire:q.uLineaire,uPool:{value:[e,t,n,r]},uDepth:{value:i},uBench:{value:new j(a?.x??0,a?.y??0,+!!a)},uPlage:{value:o??1e6},uVolet:q.uVolet,uJets:{value:[0,1,2].map(e=>new F(...s[e]??[1e4,1e4]))},uAbsorb:{value:hr()},uScatter:{value:new P(fr.diffusionCouleur).convertSRGBToLinear().multiplyScalar(fr.diffusionForce)},uEnv:H?q.uCiel:{value:c},uEnvIntensity:{value:fr.refletForce}}}function br(e){let{x0:t,x1:n,z0:r,z1:i,depth:a,banquette:s,plage:l,jets:u}=e,f=o({files:V.lumiere.ciel}),p=c(`/agr-piscine-confidentialite/demo-3d/textures/eau/normales.webp`),m=(0,U.useMemo)(()=>(p.wrapS=p.wrapT=Ke,p.flipY=!1,p.anisotropy=d,p.needsUpdate=!0,new M({vertexShader:_r,fragmentShader:vr,uniforms:{...yr({x0:t,x1:n,z0:r,z1:i,depth:a,banquette:s,plage:l,jets:u},f),uNormales:{value:p},uVague1:{value:[...fr.vague1.vitesse,fr.vague1.taille,0]},uVague2:{value:[...fr.vague2.vitesse,fr.vague2.taille,0]},uForce:{value:fr.vaguesForce},uScene:q.uScene,uRefraction:{value:fr.refraction},uReflet:q.uReflet,uRefletMatrice:q.uRefletMatrice,uRefletActif:q.uRefletActif,uBrillance:{value:fr.soleilBrillance},uSoleilForce:{value:fr.soleilForce},uLigne:{value:fr.ligneEau},uBrumeCouleur:q.uBrumeCouleur,uBrumeDist:q.uBrumeDist,uAstre:q.uAstre,uOndes:Fn.uTex,uOndesTexel:Fn.uTexel,uOndesForce:Fn.uForce,uProjecteur:q.uProjecteur,uProjCouleur:q.uProjCouleur},depthWrite:!1,side:H?2:0})),[t,n,r,i,a,s,l,u,f,p]),h=(0,U.useRef)(null);return(0,U.useLayoutEffect)(()=>{let e=h.current;if(e)return e.layers.set(1),q.surface=e,()=>{q.surface===e&&(q.surface=null)}},[]),(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(`mesh`,{ref:h,position:[(t+n)/2,mr,(r+i)/2],rotation:[-Math.PI/2,0,0],material:m,raycast:pr,children:(0,K.jsx)(`planeGeometry`,{args:[n-t,i-r]})}),H&&Xt(`ondes`)&&(0,K.jsx)(dr,{jets:u??[],niveau:-.12,couche:1,apresEau:q.apres})]})}var xr=`
  ${gr}
  uniform float uTime;
  uniform vec3 uSun;
  varying vec3 vWorld;

  vec2 hash(vec2 p) { p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3))); return fract(sin(p) * 43758.5453) * 2.0 - 1.0; }
  float gnoise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(dot(hash(i), f), dot(hash(i + vec2(1, 0)), f - vec2(1, 0)), u.x),
               mix(dot(hash(i + vec2(0, 1)), f - vec2(0, 1)), dot(hash(i + vec2(1, 1)), f - vec2(1, 1)), u.x), u.y);
  }
  // Taille d'un pixel à la surface (m) : les détails plus fins qu'environ 2 pixels sont estompés,
  // sinon ils tombent à un endroit différent à chaque image et la surface scintille.
  float pxEau;
  float octave(float f) { return 1.0 - smoothstep(0.18, 0.45, pxEau * f); }
  float hauteur(vec2 p) {
    float h = 0.0;
    h += gnoise(p * 1.1 + vec2(uTime * 0.18, uTime * 0.07)) * 0.5 * octave(1.1);
    h += gnoise(p * 2.7 - vec2(uTime * 0.11, -uTime * 0.21)) * 0.25 * octave(2.7);
    h += gnoise(p * 6.3 + vec2(-uTime * 0.35, uTime * 0.27)) * 0.11 * octave(6.3);
    h += gnoise(p * 13.0 + vec2(uTime * 0.6, uTime * 0.5)) * 0.04 * octave(13.0);
    // agitation devant les buses de refoulement (ondes qui s'éloignent)
    float kj = octave(6.0) * 0.035;
    if (kj > 0.0) for (int i = 0; i < 3; i++) {
      float d = distance(p, uJets[i]);
      h += sin(d * 38.0 - uTime * 7.0) * kj * exp(-d * 2.2);
    }
    return h;
  }
  vec3 normale(vec2 p) {
    pxEau = max(length(fwidth(p)), 1e-4);
    float e = max(0.02, pxEau * 0.75);
    float hx = hauteur(p + vec2(e, 0.0)) - hauteur(p - vec2(e, 0.0));
    float hz = hauteur(p + vec2(0.0, e)) - hauteur(p - vec2(0.0, e));
    return normalize(vec3(-hx * 0.9, 2.0 * e * 9.0, -hz * 0.9));
  }
`,Sr=`
  varying vec3 vWorld;
  void main() {
    vec4 w = modelMatrix * vec4(position, 1.0);
    vWorld = w.xyz;
    gl_Position = projectionMatrix * viewMatrix * w;
  }
`,Cr=`
  ${xr}
  uniform vec3 uAbsorb;
  uniform float uLineaire;
  void main() {
    if (vWorld.x > uVolet.x && vWorld.x < uVolet.y) discard;
    vec3 n = normale(vWorld.xz);
    vec3 v = normalize(cameraPosition - vWorld);
    vec3 r = refract(-v, n, 1.0 / 1.33);
    float t = epaisseur(vWorld, r) + epaisseur(vWorld, vec3(0.0, -1.0, 0.0)); // aller (soleil → fond) et retour (fond → œil)
    vec3 tr = exp(-uAbsorb * t);
    float fres = 0.02 + 0.98 * pow(1.0 - max(dot(n, v), 0.0), 5.0);
    vec3 m = tr * (1.0 - fres);
    // l'absorption a été réglée sur des couleurs d'écran : même rendu en lumière physique
    if (uLineaire > 0.5) m = pow(m, vec3(1.45));
    gl_FragColor = vec4(m, 1.0);
  }
`,wr=`
  ${xr}
  uniform vec3 uAbsorb;
  uniform vec3 uScatter;
  uniform float uEnvIntensity;
  void main() {
    if (vWorld.x > uVolet.x && vWorld.x < uVolet.y) discard;
    vec3 n = normale(vWorld.xz);
    vec3 v = normalize(cameraPosition - vWorld);
    vec3 r = refract(-v, n, 1.0 / 1.33);
    float t = epaisseur(vWorld, r);
    float fres = 0.02 + 0.98 * pow(1.0 - max(dot(n, v), 0.0), 5.0);
    vec3 diffusion = uScatter * (1.0 - exp(-uAbsorb * t * 0.8)) * (1.0 - fres);
    vec3 refl = reflect(-v, n);
    // pas de reflet de la ligne d'horizon de l'image du ciel (arbres, sol) : traînées qui sautaient d'une image à l'autre
    refl.y = max(abs(refl.y), 0.14);
    refl = normalize(refl);
    vec3 reflet = min(ciel(refl), vec3(3.0)) * uEnvIntensity * fres;
    // reflet du soleil : s'élargit (et baisse d'autant) quand les vaguelettes deviennent plus petites qu'un pixel
    float rugo = clamp(pxEau * 6.0, 0.0, 1.0);
    float brill = mix(600.0, 70.0, rugo);
    float rs = max(dot(refl, uSun), 0.0);
    float spec = min(pow(rs, brill) * 6.0 * (brill + 2.0) / 602.0, 2.5) + pow(rs, 60.0) * 0.25;
    vec3 col = diffusion + reflet + vec3(1.0, 0.93, 0.8) * spec;
    gl_FragColor = vec4(col, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;function Tr(e){let{x0:t,x1:n,z0:r,z1:i,depth:a,banquette:s,plage:c,jets:l}=e,u=o({files:V.lumiere.ciel}),[d,f]=(0,U.useMemo)(()=>{let e=yr({x0:t,x1:n,z0:r,z1:i,depth:a,banquette:s,plage:c,jets:l},u);return[new M({vertexShader:Sr,fragmentShader:Cr,uniforms:e,transparent:!0,depthWrite:!1,blending:4,premultipliedAlpha:!0}),new M({vertexShader:Sr,fragmentShader:wr,uniforms:e,transparent:!0,depthWrite:!1,blending:2})]},[t,n,r,i,a,s,c,l,u]);return(0,K.jsxs)(`group`,{position:[(t+n)/2,mr,(r+i)/2],rotation:[-Math.PI/2,0,0],children:[(0,K.jsx)(`mesh`,{material:d,raycast:pr,renderOrder:2,children:(0,K.jsx)(`planeGeometry`,{args:[n-t,i-r]})}),(0,K.jsx)(`mesh`,{material:f,raycast:pr,renderOrder:3,children:(0,K.jsx)(`planeGeometry`,{args:[n-t,i-r]})})]})}function Er(e){let t=z(e=>e.qualite3d!==`basse`)&&!Wt;return I(({clock:e})=>{q.uTime.value=e.elapsedTime}),t?(0,K.jsx)(br,{...e}):(0,K.jsx)(Tr,{...e})}function Dr(e){let{force:t,taille:n,vitesse:r}=fr.caustiques,i=e=>e.toFixed(4);e.uniforms.uTimeC=q.uTime,e.uniforms.uSunC=q.uSun,H&&(e.uniforms.uAstreC=q.uAstre,e.uniforms.uOndesC=Fn.uTex,e.uniforms.uOndesTexelC=Fn.uTexel,e.uniforms.uOndesForceC=Fn.uForce),e.vertexShader=`varying vec3 vPosC;
`+e.vertexShader.replace(`#include <project_vertex>`,`#include <project_vertex>
  vPosC = (modelMatrix * vec4(transformed, 1.0)).xyz;`),e.fragmentShader=`
    uniform float uTimeC;
    uniform vec3 uSunC;
    ${H?`uniform vec3 uAstreC; uniform sampler2D uOndesC; uniform vec2 uOndesTexelC; uniform float uOndesForceC;`:``}
    varying vec3 vPosC;
    float motif(vec2 uv, float time) {
      vec2 p = mod(uv * 6.28318, 6.28318) - 250.0;
      vec2 i = p;
      float c = 1.0;
      float inten = 0.005;
      for (int n = 0; n < 4; n++) {
        float t = time * (1.0 - (3.5 / float(n + 1)));
        i = p + vec2(cos(t - i.x) + sin(t + i.y), sin(t - i.y) + cos(t + i.x));
        c += 1.0 / length(vec2(p.x / (sin(i.x + t) / inten), p.y / (cos(i.y + t) / inten)));
      }
      c /= 4.0;
      c = 1.17 - pow(c, 1.4);
      return pow(abs(c), 8.0);
    }
    `+e.fragmentShader.replace(`#include <opaque_fragment>`,`
      float sous = smoothstep(${(-.105).toFixed(3)}, ${(-.18).toFixed(3)}, vPosC.y);
      if (sous > 0.0) {
        float prof = ${mr.toFixed(3)} - vPosC.y;
        vec2 q = (vPosC.xz + uSunC.xz / max(uSunC.y, 0.25) * prof) / ${i(n)};
        float tc = uTimeC * ${i(r)};
        // deux réseaux croisés : le produit ne garde que les fines lignes lumineuses
        float c1 = motif(q * 0.42, tc * 0.5 + 23.0);
        float c2 = motif(q * 0.29 + 3.7, tc * 0.37 + 11.0);
        float c = pow(clamp(c1 * 0.6 + c2 * 0.6, 0.0, 1.5), 1.6);
        // plus fines et plus vives près de la surface, diluées en profondeur
        float k = sous * mix(0.9, 0.38, clamp(prof / 1.6, 0.0, 1.0)) * ${i(t)};
        ${H?`// ondes vivantes : chaque crête concentre la lumière sur le fond (anneaux lumineux qui suivent les ondes)
        if (uOndesForceC > 0.0) {
          vec2 uoC = (vPosC.xz + uSunC.xz / max(uSunC.y, 0.25) * prof - vec2(${i(W.x0)}, ${i(W.z0)})) / vec2(${i(W.x1-W.x0)}, ${i(W.z1-W.z0)});
          vec2 tC = uOndesTexelC * 1.5;
          float lapC = texture2D(uOndesC, uoC + vec2(tC.x, 0.0)).r + texture2D(uOndesC, uoC - vec2(tC.x, 0.0)).r + texture2D(uOndesC, uoC + vec2(0.0, tC.y)).r + texture2D(uOndesC, uoC - vec2(0.0, tC.y)).r - 4.0 * texture2D(uOndesC, uoC).r;
          c = max(c - lapC * 70.0 * uOndesForceC, 0.0);
        }
        k *= dot(uAstreC, vec3(0.37));`:``}
        outgoingLight += diffuseColor.rgb * vec3(0.9, 1.0, 1.0) * c * k;
      }
      #include <opaque_fragment>`)}typeof window<`u`&&new URLSearchParams(window.location.search);var Or=`${H?`refonte`:`classique`}-${B}`,kr={Float32Array,Uint32Array,Uint16Array,Uint8Array,Int8Array,Int16Array,Int32Array};function Ar(e,t,n){if(n===`s8`||n===`u8`){let t=new Float32Array(e.length),r=n===`s8`?1/127:1/255;for(let n=0;n<e.length;n++)t[n]=e[n]*r;return t}return n===`u16`?new kr[t](e):e.slice()}function jr(e,t){if(typeof e!=`object`||!e)return e;if(Array.isArray(e))return e.map(e=>jr(e,t));if(e.$===`ta`)return Ar(t[e.i],e.k,e.c);if(e.$===`geo`){let n=new N;for(let[r,i]of Object.entries(e.a))n.setAttribute(r,new k(jr(i.d,t),i.s,i.n));e.i&&n.setIndex(new k(jr(e.i,t),1));for(let[t,r,i]of e.g)n.addGroup(t,r,i);return n}return Object.fromEntries(Object.entries(e).map(([e,n])=>[e,jr(n,t)]))}var Mr=861030209,Nr=null;function Pr(e){let t=new DataView(e);if(t.getUint32(0,!0)!==Mr)throw Error(`précalcul : fichier illisible`);let n=t.getUint32(4,!0),r=JSON.parse(new TextDecoder().decode(new Uint8Array(e,8,n)));if(r.empreinte!==`8f59af8232f1e942`){console.warn(`Précalcul 3D périmé (le code a changé depuis) : tout est recalculé au lancement`);return}let i=Math.ceil((8+n)/8)*8,a=r.morceaux.map(([t,n,r])=>new kr[t](e,i+n,r));Nr={entrees:r.entrees,morceaux:a}}var Fr=null,Ir=!1;function Lr(){if(!Ir)throw Fr??=(async()=>{if(typeof DecompressionStream>`u`)return;let e=(await fetch(`/agr-piscine-confidentialite/demo-3d/precalcul/index.json`).then(e=>e.ok?e.json():null))?.[Or];if(!e)return;let t=await fetch(`/agr-piscine-confidentialite/demo-3d/precalcul/${e}`);t.ok&&t.body&&Pr(await new Response(t.body.pipeThrough(new DecompressionStream(`gzip`))).arrayBuffer())})().catch(()=>{}).finally(()=>void(Ir=!0)),Fr}var Rr=new Set,zr=[];function Br(e,t){let n=Nr?.entrees[e];if(n!==void 0)return Rr.add(e),jr(n,Nr.morceaux);let r=t();return Nr&&zr.push(e),r}typeof window<`u`&&Object.assign(window,{__precalculRelues:()=>Rr.size,__precalculManquees:()=>zr});function J(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new N;c.morphTargetsRelative=s;let l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0,p=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let t in d.morphAttributes){if(!i.has(t))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;if(d.morphAttributes[t].length!==e[0].morphAttributes[t].length)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have the same number of morph targets for the "`+t+`" morph attribute.`),null;o[t]===void 0&&(o[t]=[]),o[t].push(d.morphAttributes[t]),p++}if(p!==i.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of morph attributes.`),null;if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=Vr(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=Vr(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function Vr(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new k(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}var Hr=V.matieres,Ur={plage:[.95,1.01,1.17],margelles:[1.04,1.1,1.27]},Wr=[`512`,`1k`,`2k`],Gr=e=>{let t=typeof e.resolution==`string`?e.resolution:e.resolution[Ut];return Wr[Math.min(Wr.indexOf(Hr.resolution[Ut]),Wr.indexOf(t))]},Kr=(e,t)=>`/agr-piscine-confidentialite/demo-3d/textures/${e.texture}/${Gr(e)}/${t}.webp`;function qr(e,t,n,r){t&&(e.uniforms.uVarRug={value:new F(t,1/(n*r))},e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
      uniform vec2 uVarRug;
      float varH(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float varN(vec2 p) {
        vec2 i = floor(p), f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(mix(varH(i), varH(i + vec2(1.0, 0.0)), u.x), mix(varH(i + vec2(0.0, 1.0)), varH(i + vec2(1.0, 1.0)), u.x), u.y);
      }`).replace(`#include <roughnessmap_fragment>`,`#include <roughnessmap_fragment>
      #ifdef USE_ROUGHNESSMAP
        vec2 pVar = vRoughnessMapUv * uVarRug.y;
        float nVar = varN(pVar) * 0.65 + varN(pVar * 2.7 + 13.1) * 0.35;
        roughnessFactor = clamp(roughnessFactor * (1.0 + uVarRug.x * (nVar * 2.0 - 1.0)), 0.04, 1.0);
      #endif`))}function Jr(e){let t=Hr[e],{map:n,normalMap:r,arm:i}=f({map:Kr(t,`couleur`),normalMap:Kr(t,`normale`),arm:Kr(t,`arm`)});return(0,U.useMemo)(()=>{let a=(e,n=!1)=>{let r=e.clone();return r.wrapS=r.wrapT=Ke,r.repeat.set(1/t.taille,1/t.taille),r.anisotropy=d,r.channel=0,n&&(r.colorSpace=it),r.needsUpdate=!0,r},o=a(i),s=H&&Ur[e]||t.teinte||[1,1,1];return{map:a(n,!0),normalMap:a(r),roughnessMap:o,aoMap:o,aoMapIntensity:t.ombreCreux,normalScale:new F(t.relief,t.relief),roughness:t.rugosite,metalness:0,color:new P(s[0],s[1],s[2])}},[n,r,i,t])}function Yr(e,t){let n=Hr[e];return{onBeforeCompile:e=>{t?.(e),qr(e,n.variation??0,n.variationTaille??1,1/n.taille)},customProgramCacheKey:()=>`variation-${e}${t?`-plus`:``}`}}var Xr=[{prefixe:`Textilène`,reglage:Hr.textilene,uvModele:.05},{prefixe:`Résine gris clair`,reglage:Hr.resine,uvModele:.08,rotation:Math.PI/2,reliefSeul:!0},{prefixe:`Résine anthracite`,reglage:Hr.resine,uvModele:.08,rotation:Math.PI/2,reliefSeul:!0}],Zr=new Map;function Qr(e){e.traverse(e=>{if(e instanceof je)for(let t of Array.isArray(e.material)?e.material:[e.material]){let e=Xr.find(e=>t.name?.startsWith(e.prefixe));if(!e||t.userData.remplacee)continue;t.userData.remplacee=!0;let n=e.reglage,r=t=>{let r=`/agr-piscine-confidentialite/demo-3d/textures/${n.texture}/${Gr(n)}/${t}.webp`,i=`${r}|${e.uvModele}|${e.rotation??0}`;if(!Zr.has(i)){let t=m(r,t=>{t.wrapS=t.wrapT=Ke,t.repeat.set(e.uvModele/n.taille,e.uvModele/n.taille),t.rotation=e.rotation??0,t.anisotropy=d,t.channel=0});Zr.set(i,t)}return Zr.get(i)};t.normalMap=r(`normale`),t.normalScale.set(n.relief,n.relief),e.reliefSeul||(t.roughnessMap=r(`arm`),t.roughness=n.rugosite),t.needsUpdate=!0}})}var $r=H&&Xt(`scans`),ei=H?[{x:-12.3,z:-6.7,rx:3.2,rz:2.2,sol:`galets`},{x:-13.6,z:-7.3,rx:1.5,rz:1.1,sol:`pouzzolane`,dessus:!0},{x:5.7,z:-6.7,rx:4.1,rz:2.2,sol:`pouzzolane`},{x:3.6,z:-6.3,rx:1.5,rz:1.2,sol:`galets`,dessus:!0},{x:-12.2,z:5.5,rx:3,rz:5.2,sol:`galets`},{x:-13.3,z:9,rx:1.6,rz:1.5,sol:`pouzzolane`,dessus:!0},{x:7.6,z:5,rx:2.6,rz:4.6,sol:`pouzzolane`},{x:8.3,z:2,rx:1.5,rz:1.5,sol:`galets`,dessus:!0},{x:-10.4,z:0,rx:1.05,rz:2.6,sol:`galets`}]:[],ti=(e,t,n,r=0)=>((t-e.x)/(e.rx+r))**2+((n-e.z)/(e.rz+r))**2<1,ni=(e,t)=>ei.some(n=>!n.dessus&&ti(n,e,t,.08)),ri=H?[[-10.6,-7.6,.55,.4],[-9.9,-7.1,.32,2.1],[-10.9,-6.9,.22,4],[7.6,-5.4,.5,1.2],[8.3,-5.9,.3,3.3],[2.5,-7.4,.36,.6],[-10.2,9.4,.5,5.1],[-10.9,8.7,.28,1.7],[-14.2,2.2,.4,2.9],[-13.7,1.6,.24,.2],[6.1,3.2,.42,4.4],[6.6,2.6,.24,1],[9.3,8.4,.38,2.5],[-10.5,2.1,.3,3.7]]:[],ii=H?[[-13.5,-7.2,.55,`agave`],[-9.6,-6.2,.4,`yucca`],[-14.6,-5.6,.42,`yucca`],[7.4,-7.2,.6,`agave`],[8.9,-6.4,.45,`yucca`],[3.6,-6.9,.38,`agave`],[-13.3,8.9,.6,`agave`],[-10.3,4.3,.42,`yucca`],[-14.3,6.6,.45,`yucca`],[-11.6,10,.36,`agave`],[8.4,2.1,.5,`agave`],[6,5.4,.42,`yucca`],[9.1,6,.45,`yucca`],[7,9,.38,`agave`],[-10.4,-1.9,.34,`yucca`]]:[],ai=H?[[-11.9,-8,.6],[-12.9,-5.2,.45],[-10.6,-5.3,.38],[4.6,-5.3,.5],[6.9,-8.1,.55],[9,-7.6,.4],[-11,2.6,.55],[-12.2,7.4,.5],[-14.4,4.6,.6],[-11.2,8.6,.38],[8.8,4.4,.55],[6.6,6.2,.42],[8.2,8.6,.5]]:[],oi=H?[[-11.3,-6,.75],[-14,-8.2,.6],[-9.7,-8.2,.65],[5,-7.9,.7],[7.9,-6.6,.6],[2.6,-5.6,.55],[-12.9,2.4,.7],[-10,6.9,.6],[-13.9,10.2,.65],[-11.4,4.9,.55],[7.2,3.6,.7],[9.4,3,.55],[5.9,8.2,.6],[8.9,7.4,.7],[-10.6,.6,.6],[-10.2,-.9,.5]]:[],si=H?[[-10.4,-5.6,1],[-11.9,-4.9,.85],[3.2,-5.4,.9],[6.3,-4.9,1],[8.9,-5.2,.8],[-9.9,3.6,1],[-9.7,7.9,.9],[5.5,4.2,.95],[5.6,7,.85],[-9.8,1.3,.8]]:[],ci=H?[[-12.6,-8.4,1,1],[4.9,-8.5,1.1,1],[-13.6,5.6,.95,0],[9.5,6.9,.9,1]]:[],li=[[-14.6,-8.1,.75],[-13.4,-8.3,.55],[-14.8,-6.8,.5],[9.6,-8.1,.7],[8.4,-8.4,.5],[-14.7,12.5,.7],[-13.5,12.8,.5],[9.6,12.5,.75],[9.7,11.2,.5],[7.4,1.4,.45],[7.9,.6,.35],[-10.2,-1.6,.55],[-10.5,-.4,.4],[-10.1,1.5,.5]],ui=V.vegetaux,di=e=>e.toFixed(4);function fi(e){let t=e>>>0||1;return()=>(t^=t<<13,t^=t>>>17,t^=t<<5,(t>>>0)%1e5/1e5)}var pi=(e,t,n)=>{let r=Math.sin(e*127.1+t*311.7+n*74.7)*43758.5453;return r-Math.floor(r)};function mi(e,t,n){let r=Math.floor(e),i=Math.floor(t),a=Math.floor(n),o=e=>e*e*(3-2*e),s=o(e-r),c=o(t-i),l=o(n-a),u=(e,t,n)=>e+(t-e)*n,d=(e,t,n)=>pi(r+e,i+t,a+n);return u(u(u(d(0,0,0),d(1,0,0),s),u(d(0,1,0),d(1,1,0),s),c),u(u(d(0,0,1),d(1,0,1),s),u(d(0,1,1),d(1,1,1),s),c),l)}function hi(e,t,n){let[r,i,a]=e.r,o=e.boite?new xe(2,2,2,Math.max(4,Math.round(r*5)),Math.max(4,Math.round(i*6)),Math.max(4,Math.round(a*5))):new le(1,26,e.fuseau?24:16),s=o.getAttribute(`position`),c=[],l=new P(t.bas),u=new P(t.haut),d=new P,[f,p,m]=e.c,[h,g,_]=e.r,v=new j;for(let o=0;o<s.count;o++){v.fromBufferAttribute(s,o);let y=v.clone().normalize();if(e.boite){let e=Math.min(.28,r*.9,i*.9,a*.9),t=[r,i,a],n=[v.x*r,v.y*i,v.z*a],o=n.map((n,r)=>Math.max(-(t[r]-e),Math.min(t[r]-e,n))),s=new j(n[0]-o[0],n[1]-o[1],n[2]-o[2]);y=s.lengthSq()>1e-9?s.normalize():new j(0,1,0),v.set((o[0]+y.x*e)/r,(o[1]+y.y*e)/i,(o[2]+y.z*e)/a)}else if(e.fuseau){let e=(v.y+1)/2,t=1-.55*e*e;v.x*=t,v.z*=t}let b=f+v.x*h,x=p+v.y*g,S=m+v.z*_,C=(mi(b*t.frequence+n,x*t.frequence,S*t.frequence)-.5)*2,w=t.bosses*Math.min(h,g,_),T=H&&e.boite?(mi(b*.42+n*3,x*.3,S*.42)-.5)*2*.13+(mi(b*1.1+9,x*.8,S*1.1)-.5)*2*.06:0,E=b+y.x*(w*C+T),D=S+y.z*(w*C+T),O=x+y.y*(w*C*.7+(y.y>0?T*1.3:0));O<.01&&(O=.01),s.setXYZ(o,E,O,D);let ee=Math.min(1,Math.max(0,(O-(p-g))/(2*g)));d.copy(l).lerp(u,ee**.8);let te=1+(mi(b*.9,x*.9+3,S*.9)-.5)*2*t.variation;c.push(d.r*te,d.g*te,d.b*te)}return o.setAttribute(`color`,new be(c,3)),o.deleteAttribute(`uv`),o.computeVertexNormals(),o}function gi(e,t,n){return J(e.map((e,r)=>hi(e,t,n+r*.37)))}function _i(e){e.fragmentShader=e.fragmentShader.replace(`#include <aomap_fragment>`,`#include <aomap_fragment>
  reflectedLight.indirectDiffuse *= 1.25;`)}var vi=H?1.35:1,yi=new Map;function bi(e,t){let n=`${e.forme}-${e.tons.join()}`;if(yi.has(n))return yi.get(n);let r=ui.finesseFeuilles[B],i=document.createElement(`canvas`);i.width=i.height=r;let a=i.getContext(`2d`),o=document.createElement(`canvas`);o.width=o.height=r;let s=o.getContext(`2d`);s.fillStyle=`#000`,s.fillRect(0,0,r,r);let c=fi(t),u={ovale:11,ecaille:16,aiguille:34,lanceole:15,vigne:7}[e.forme],[f,p,m]={ovale:[.3,.42,.14],ecaille:[.2,.3,.12],aiguille:[.32,.46,.035],lanceole:[.34,.48,.07],vigne:[.3,.4,.2]}[e.forme],h=Array.from({length:u},(e,t)=>({a:c()*Math.PI*2,d:Math.sqrt(c())*.16,L:Oe.lerp(f,p,c())*r,l:m*r*(.8+c()*.4),ton:t/u,nuance:(c()-.5)*.16,teinte:(c()-.5)*.05})),g=(e,t,n)=>{let r=new P(e),i={h:0,s:0,l:0};return r.getHSL(i),r.setHSL(i.h+n,i.s,Math.min(1,Math.max(0,i.l*t))),`#${r.getHexString()}`},_=(t,n,r,i)=>{t.beginPath(),t.moveTo(0,0),e.forme===`aiguille`?(t.lineTo(n*i,-r*.5),t.lineTo(0,-r)):e.forme===`vigne`?(t.quadraticCurveTo(n*i*.5,r*.12,n*i*1.05,-r*.1),t.lineTo(n*i*1,-r*.3),t.lineTo(n*i*.5,-r*.36),t.lineTo(n*i*1.2,-r*.62),t.lineTo(n*i*.85,-r*.8),t.lineTo(n*i*.36,-r*.7),t.lineTo(n*i*.22,-r*.93),t.lineTo(0,-r)):t.quadraticCurveTo(n*i*(e.forme===`ecaille`?1.4:1.1),-r*.45,0,-r),t.closePath()};for(let t of h){let n=r/2+Math.cos(t.a)*t.d*r,i=r/2+Math.sin(t.a)*t.d*r,o=t.a+Math.PI/2+(c()-.5)*.5,l=t.ton<.35,u=l?e.tons[0]:e.tons[1],d=l?e.tons[1]:e.tons[2],{L:f,l:p}=t;for(let e of[a,s])e.save(),e.translate(n,i),e.rotate(o);for(let e of[-1,1]){let n=e<0?u:d,r=a.createLinearGradient(0,0,0,-f);r.addColorStop(0,g(n,.82+t.nuance,t.teinte)),r.addColorStop(.55,g(n,1+t.nuance,t.teinte)),r.addColorStop(1,g(n,1.12+t.nuance,t.teinte)),a.fillStyle=r,_(a,e,f,p),a.fill();let i=s.createLinearGradient(0,0,e*p,0);i.addColorStop(0,`#c8c8c8`),i.addColorStop(1,`#3c3c3c`),s.fillStyle=i,_(s,e,f,p),s.fill()}a.strokeStyle=`rgba(20, 30, 15, 0.22)`,a.lineWidth=Math.max(.6,r/512);for(let e of[-1,1])_(a,e,f,p),a.stroke();(e.forme!==`aiguille`||p>6)&&(a.strokeStyle=g(d,1.25+t.nuance,t.teinte),a.lineWidth=Math.max(.8,p*.09),a.beginPath(),a.moveTo(0,-f*.04),a.lineTo(0,-f*.9),a.stroke(),s.strokeStyle=`#6e6e6e`,s.lineWidth=Math.max(1,p*.12),s.beginPath(),s.moveTo(0,-f*.04),s.lineTo(0,-f*.9),s.stroke()),a.restore(),s.restore()}let v=new qe(i);v.colorSpace=it,v.anisotropy=d;let y=s.getImageData(0,0,r,r).data,b=new Uint8Array(r*r*4),x=(e,t)=>y[((t+r)%r*r+(e+r)%r)*4]/255,S=6*ui.reliefFeuilles;for(let e=0;e<r;e++)for(let t=0;t<r;t++){let n=(x(t+1,e)-x(t-1,e))*S,i=(x(t,e+1)-x(t,e-1))*S,a=Math.hypot(n,i,1),o=(e*r+t)*4;b[o]=-n/a*127+128,b[o+1]=i/a*127+128,b[o+2]=1/a*127+128,b[o+3]=255}let C=l(new Qe(b,r,r));C.flipY=!0,C.needsUpdate=!0;let w={map:v,normal:C};return yi.set(n,w),w}var xi=e=>.2126*e.r+.7152*e.g+.0722*e.b;function Si(e,t,n,r,i){let a=fi(r),o=e.getAttribute(`position`),s=e.getAttribute(`normal`),c=e.getAttribute(`color`),l=xi(new P(n)),u=[],d=[],f=[],p=[],m=[],h=new j,g=new j,_=new j,v=new j,y=new j(0,1,0),b=new P,x=e.getIndex(),S=(x?x.count:o.count)/3,C=new j,w=new j,T=new j,E=e=>x?x.getX(e):e,D=[];for(let e=0;e<S;e++){let n=E(e*3),r=E(e*3+1),i=E(e*3+2);C.fromBufferAttribute(o,n),w.fromBufferAttribute(o,r),T.fromBufferAttribute(o,i);let s=w.clone().sub(C).cross(T.clone().sub(C)).length()/2*t.densite;for(;s>0&&!(s<1&&a()>s);){--s;let e=a(),t=a();e+t>1&&(e=1-e,t=1-t),D.push({i:[n,r,i],w:[1-e-t,e,t]})}}let O=(e,t,n)=>n.set(0,0,0).addScaledVector(new j().fromBufferAttribute(e,t.i[0]),t.w[0]).addScaledVector(new j().fromBufferAttribute(e,t.i[1]),t.w[1]).addScaledVector(new j().fromBufferAttribute(e,t.i[2]),t.w[2]),ee=new j;for(let e of D){if(O(o,e,h),O(s,e,g).normalize(),h.y<.03||g.y<-.55&&h.y<.5||i&&!i(h))continue;let n=Oe.lerp(t.taille[0],t.taille[1],a()),[r,x]=t.profondeur??[-.02,.06];h.addScaledVector(g,n*Oe.lerp(r,x,a())),_.crossVectors(Math.abs(g.y)>.9?new j(1,0,0):y,g).normalize(),v.crossVectors(g,_).normalize();let S=a()*Math.PI*2,C=_.clone().multiplyScalar(Math.cos(S)).addScaledVector(v,Math.sin(S)),[w,T]=t.releve??[.35,.75],E=_.clone().multiplyScalar(-Math.sin(S)).addScaledVector(v,Math.cos(S)).addScaledVector(g,Oe.lerp(w,T,a())).normalize();O(c,e,ee),b.setRGB(ee.x,ee.y,ee.z);let D=Math.min(1.12,xi(b)/l*(.95+a()*.1)),te=(pi(h.x*3.1,h.y*2.3,h.z*1.7)*2-1)*ui.variationTeinte,[ne,re,ie]=[D*(1+te*.7),D,D*(1-te)],k=n/2;for(let[e,t]of[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]])u.push(h.x+(C.x*e+E.x*t)*k,h.y+(C.y*e+E.y*t)*k,h.z+(C.z*e+E.z*t)*k),d.push(g.x,g.y,g.z),f.push((e+1)/2,(t+1)/2),p.push(ne,re,ie),m.push(.7)}let te=new N;return te.setAttribute(`position`,new be(u,3)),te.setAttribute(`normal`,new be(d,3)),te.setAttribute(`uv`,new be(f,2)),te.setAttribute(`color`,new be(p,3)),te.setAttribute(`aVent`,new be(m,1)),te.computeBoundingSphere(),te}function Ci(e,t,n=ui.clarteCreux){let r=e.clone(),i=r.getAttribute(`position`),a=r.getAttribute(`normal`),o=r.getAttribute(`color`);for(let e=0;e<i.count;e++)i.setXYZ(e,i.getX(e)-a.getX(e)*t,Math.max(.005,i.getY(e)-a.getY(e)*t),i.getZ(e)-a.getZ(e)*t),o.setXYZ(e,o.getX(e)*n,o.getY(e)*n,o.getZ(e)*n);return r}function wi(e,t=!0){let n=ui.vent.actif?e*ui.vent.force:0,r=ui.vent.vitesse;return e=>{e.uniforms.uTemps=q.uTime,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute float aVent;
uniform float uTemps;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
        vec3 wp = (modelMatrix * vec4(transformed, 1.0)).xyz;
        float ph = wp.x * 0.37 + wp.z * 0.23;
        transformed.x += sin(uTemps * ${di(.9*r)} + ph) * ${di(n)} * aVent;
        transformed.z += cos(uTemps * ${di(.7*r)} + ph * 1.3) * ${di(n*.7)} * aVent;`),e.fragmentShader=e.fragmentShader.replace(`#include <alphatest_fragment>`,`#ifdef USE_MAP
        // vues de loin, les feuilles sont plus petites qu'un pixel et leur transparence se moyenne : on rehausse
        // l'opacité selon le niveau de détail lu (Ben Golus), sinon le feuillage se troue et grésille
        vec2 txF = vMapUv * 256.0;
        float mipF = max(0.0, 0.5 * log2(max(dot(dFdx(txF), dFdx(txF)), dot(dFdy(txF), dFdy(txF)))));
        diffuseColor.a *= 1.0 + mipF * ${di(t?ui.maintienFeuilles:0)};
        #endif
        #include <alphatest_fragment>`).replace(`#include <aomap_fragment>`,`reflectedLight.directSpecular *= ${di(ui.brillanceFeuilles)};
        reflectedLight.indirectSpecular *= ${di(ui.brillanceFeuilles*.5)};
        reflectedLight.indirectDiffuse *= 1.25;
        #if NUM_DIR_LIGHTS > 0
          // contre-jour : la lumière du soleil traverse les feuilles quand on regarde vers lui (moins au cœur du feuillage)
          vec3 hT = normalize(directionalLights[0].direction + normal * 0.35);
          float tT = pow(clamp(dot(geometryViewDir, -hT), 0.0, 1.0), 4.0) * ${di(ui.translucidite)} * clamp(vColor.g * 1.2, 0.3, 1.0);
          reflectedLight.directDiffuse += diffuseColor.rgb * directionalLights[0].color * tT;
        #endif
        #include <aomap_fragment>`)}}function Ti({cle:e,volume:t,feuillage:n,haut:r,graine:i,graineImage:a=i,ombres:o=!0,creux:s,allege:c=!1,echelle:l=1}){let u=z(e=>e.qualite3d===`basse`)||c,d=(0,U.useMemo)(()=>{let e=u?1.3:1,t=n.taille[0]*e,r=Math.min(1/l,.6/t);return{...n,densite:n.densite*(u?.5:1)/(r*r),taille:[t*r,n.taille[1]*e*r]}},[n,u,l]),{c:f,f:p}=(0,U.useMemo)(()=>{let n=()=>({c:Ci(t,d.taille[0]/(u?1.3:1)*.18,s),f:Si(t,d,r,i)});return e?Br(`jardin:plante:${e}:${u}:${l}:${s}`,n):n()},[e,t,d,r,i,s,u,l]),m=(0,U.useMemo)(()=>bi(n,a),[n,a]),h=(0,U.useMemo)(()=>wi(n.vent),[n.vent]);return(0,U.useEffect)(()=>()=>(f.dispose(),p.dispose()),[f,p]),(0,K.jsxs)(`group`,{children:[(0,K.jsx)(`mesh`,{geometry:f,castShadow:o,receiveShadow:!0,children:(0,K.jsx)(`meshStandardMaterial`,{vertexColors:!0,roughness:1,metalness:0,onBeforeCompile:_i,customProgramCacheKey:()=>`maquette-coeur`})}),(0,K.jsx)(`mesh`,{geometry:p,receiveShadow:!0,children:(0,K.jsx)(`meshStandardMaterial`,{map:m.map,normalMap:m.normal,normalScale:[ui.reliefFeuilles,ui.reliefFeuilles],color:[ui.clarteFeuilles*vi,ui.clarteFeuilles*vi,ui.clarteFeuilles*vi],vertexColors:!0,alphaTest:.5,alphaToCoverage:!u,side:2,roughness:.55,metalness:0,onBeforeCompile:h,customProgramCacheKey:()=>`feuilles-3-${n.vent}`})})]})}var Y={x0:-16,x1:11,z0:-9.5,z1:14},Ei=[[-8.95,2.95,-4.05,4.05],[2.95,6.3,-2.3,.3],[-8.8,2.8,-5.1,-3.9]],Di=[],Oi=H?[-3.95,-2.45,3.95,13.25]:null;Ei.push(...Di,...Oi?[Oi]:[]);function ki(){let{x0:e,x1:t,z0:n,z1:r}=Y,i=fi(7),a=[],o=(e,t,n,r)=>{let o=Math.hypot(n-e,r-t)/2+.45,s=Math.abs(n-e)>Math.abs(r-t),c=.9+i()*.04,l=.46;a.push({c:[(e+n)/2,c,(t+r)/2],r:s?[o,c,l]:[l,c,o],boite:!0})};return o(e,n,t,n),o(e,n,e,r),o(t,n,t,r),H||o(e,r,t,r),a}function Ai(e){let t=[];for(let n=Y.x0+.6;n<Y.x1;n+=2.1+e()*1.1)t.push([n,Y.z0-1.25-e()*.3,6.2+e()*2.2]);return t.push([Y.x0-1.3,-3,7.5],[Y.x0-1.3,2.5,6.4],[Y.x1+1.3,3.5,7],[Y.x1+1.3,8.5,6.2]),t}var ji=Ai(fi(11));function Mi(){let e=fi(11),t=[],n=Ai(e);for(let[r,i,a]of n){let n=.55+e()*.15;t.push({c:[r,a/2,i],r:[n,a/2,n],fuseau:!0})}return t}var Ni=(()=>{let e=fi(23),t=[];for(let n=-8.4;n<=2.45;n+=.62){let r=-4.5+(Math.round((n+8.4)/.62)%2?.22:-.18),i=.3+e()*.06;t.push({c:[n,.12,r],r:[i,.24,i]})}return t})(),Pi=(()=>{let e=$r?[]:[...li];return $r||e.push(...ai),e.map(([e,t,n])=>({c:[e,n*.82,t],r:[n,n*.85,n]}))})(),Fi=null;function Ii(){if(Fi)return Fi;let e=document.createElement(`canvas`);e.width=64,e.height=512;let t=e.getContext(`2d`),n=fi(77);t.strokeStyle=`#94a083`,t.lineWidth=2.6,t.beginPath(),t.moveTo(32,512),t.quadraticCurveTo(34,307.2,32,153.6),t.stroke();let r=[`#7462b0`,`#8572c0`,`#9683cd`,`#a693d8`,`#b6a6e0`],i=14,a=9;for(;i<184.32;){let e=6+Math.floor(n()*3);for(let a=0;a<e;a++){let e=32+(n()-.5)*20*(1-i/460.8),a=i+(n()-.5)*6;t.fillStyle=`#5e5285`,t.beginPath(),t.ellipse(e,a+2,3.4,4.6,0,0,Math.PI*2),t.fill(),t.fillStyle=r[Math.floor(n()*r.length)],t.beginPath(),t.ellipse(e+(n()-.5)*2,a,3.6+n()*1.4,4.2+n()*1.6,(n()-.5)*.8,0,Math.PI*2),t.fill(),n()<.35&&(t.fillStyle=`rgba(230, 220, 250, 0.55)`,t.beginPath(),t.arc(e-1,a-1.5,1.1,0,Math.PI*2),t.fill())}i+=a,a*=1.09}let o=new qe(e);return o.colorSpace=it,o.anisotropy=d,Fi=o,o}function Li(e,t){let n=fi(41),r=[],i=[],a=[],o=[],s=[];for(let c of e)for(let e=0;e<t;e++){let e=n()*Math.PI*2,t=Math.sqrt(n())*.85,l=c.c[0]+Math.cos(e)*t*c.r[0],u=c.c[2]+Math.sin(e)*t*c.r[2],d=c.c[1]+c.r[1]*Math.sqrt(Math.max(0,1-t*t))*.75,f=.26+n()*.14,p=f/8,m=t*.5+.05,h=new j(Math.cos(e)*Math.sin(m),Math.cos(m),Math.sin(e)*Math.sin(m)).normalize(),g=.9+n()*.2,_=new j(Math.cos(e),.6,Math.sin(e)).normalize(),v=n()*Math.PI;for(let e of[0,Math.PI/2]){let t=new j(Math.cos(v+e),0,Math.sin(v+e));t.sub(h.clone().multiplyScalar(t.dot(h))).normalize().multiplyScalar(p/2);for(let[e,n]of[[-1,0],[1,0],[1,1],[-1,0],[1,1],[-1,1]])r.push(l+t.x*e+h.x*f*n,d+t.y*e+h.y*f*n,u+t.z*e+h.z*f*n),i.push(_.x,_.y,_.z),a.push((e+1)/2,n),o.push(g,g,g),s.push(n*1.6)}}let c=new N;return c.setAttribute(`position`,new be(r,3)),c.setAttribute(`normal`,new be(i,3)),c.setAttribute(`uv`,new be(a,2)),c.setAttribute(`color`,new be(o,3)),c.setAttribute(`aVent`,new be(s,1)),c.computeBoundingSphere(),c}function Ri(){let e=z(e=>e.qualite3d),t=(0,U.useMemo)(()=>Li(Ni,ui.episParPied[e]??ui.episParPied.standard),[e]),n=(0,U.useMemo)(()=>Ii(),[]),r=(0,U.useMemo)(()=>wi(.012,!1),[]);(0,U.useEffect)(()=>()=>t.dispose(),[t]);let i=(0,U.useRef)(null);return(0,U.useEffect)(()=>{let e=i.current;if(e)return Bn.add(e),()=>void Bn.delete(e)},[]),(0,K.jsx)(`mesh`,{ref:i,geometry:t,receiveShadow:!0,children:(0,K.jsx)(`meshStandardMaterial`,{map:n,vertexColors:!0,alphaTest:.5,side:2,roughness:.7,metalness:0,onBeforeCompile:r,customProgramCacheKey:()=>`epis-lavande-2`})})}var zi={haie:{bas:`#27402a`,haut:`#4f6d43`,variation:.06,bosses:.16,frequence:1.6},cypres:{bas:`#1f3326`,haut:`#3d573a`,variation:.05,bosses:.14,frequence:2.2},boule:{bas:`#3e5641`,haut:`#7c9273`,variation:.07,bosses:.1,frequence:2.6},lavande:{bas:`#5f6b56`,haut:`#8f9a80`,variation:.06,bosses:.12,frequence:3.2}},Bi=H?{...zi,haie:{bas:`#27402a`,haut:`#4f6d43`,variation:.1,bosses:.24,frequence:2.1},boule:{bas:`#2e4432`,haut:`#738b69`,variation:.09,bosses:.22,frequence:3.4},lavande:{bas:`#4f5c48`,haut:`#8d9a7f`,variation:.08,bosses:.2,frequence:4.2}}:zi,Vi={haie:{forme:`ovale`,tons:[`#27442b`,`#35573a`,`#4a7046`],taille:[.36,.48],vent:.003,densite:28},cypres:{forme:`ecaille`,tons:[`#1b3223`,`#284631`,`#3c5e40`],taille:[.32,.44],vent:.006,densite:30},boule:{forme:`aiguille`,tons:[`#324d38`,`#4a6a4a`,`#6b8a64`],taille:[.26,.36],vent:.004,densite:46},lavande:{forme:`aiguille`,tons:[`#55614b`,`#717e66`,`#97a287`],taille:[.12,.18],vent:.008,densite:115},olivier:{forme:`lanceole`,tons:[`#3e5038`,`#5b7055`,`#83967a`],taille:[.44,.58],vent:.006,densite:30}},Hi=B===`haute`,Ui=H?{...Vi,haie:{forme:`ovale`,tons:[`#22402a`,`#34603a`,`#5c8a4c`],taille:Hi?[.13,.19]:[.2,.28],vent:.003,densite:Hi?185:80,releve:[.2,.6],profondeur:[-.3,.12]},cypres:{forme:`ecaille`,tons:[`#16301f`,`#24482d`,`#3f6a40`],taille:Hi?[.12,.18]:[.19,.27],vent:.006,densite:Hi?200:85,releve:[.55,1.1],profondeur:[-.3,.1]},boule:{forme:`ovale`,tons:[`#35543a`,`#557a4b`,`#83a26e`],taille:[.14,.21],vent:.003,densite:150,releve:[.15,.5],profondeur:[-.25,.14]},lavande:{forme:`aiguille`,tons:[`#4e5a47`,`#6c785f`,`#97a287`],taille:[.08,.13],vent:.006,densite:260,releve:[.15,.45],profondeur:[-.3,.05]},olivier:{forme:`lanceole`,tons:[`#3b4836`,`#5e6c54`,`#a6b09a`],taille:[.19,.26],vent:.006,densite:150,releve:[.25,.8],profondeur:[-.3,.3]}}:Vi;function Wi(){let e=(0,U.useMemo)(()=>({haie:gi(ki(),Bi.haie,1),cypres:$r?null:gi(Mi(),Bi.cypres,2),boules:Pi.length?gi(Pi,Bi.boule,3):null,lavandes:$r?null:gi(Ni,Bi.lavande,4)}),[]);return(0,K.jsxs)(`group`,{children:[!$r&&(0,K.jsx)(Ti,{volume:e.haie,feuillage:Ui.haie,haut:Bi.haie.haut,graine:1}),e.cypres&&(0,K.jsx)(Ti,{volume:e.cypres,feuillage:Ui.cypres,haut:Bi.cypres.haut,graine:2}),e.boules&&(0,K.jsx)(Ti,{volume:e.boules,feuillage:Ui.boule,haut:Bi.boule.haut,graine:3,creux:H?.55:void 0}),e.lavandes&&(0,K.jsx)(Ti,{volume:e.lavandes,feuillage:Ui.lavande,haut:Bi.lavande.haut,graine:4,ombres:!1,creux:H?.38:.5}),!$r&&(0,K.jsx)(Ri,{}),(0,K.jsx)(Xi,{}),Oi&&(0,K.jsx)(Xi,{zone:Oi}),Di.map((e,t)=>(0,K.jsx)(Xi,{zone:e,blanc:!0},t))]})}function Gi(e){let t=fi(e),n=[],r=(t,r,i)=>{let a=new Se(new ce(t),16,1,9,!1),o=a.getAttribute(`position`),s=new ce(t),c=[];for(let t=0;t<o.count;t++){let n=Math.floor(t/10)/16,a=s.getPointAt(n),l=new j().fromBufferAttribute(o,t).sub(a),u=r+(i-r)*n;l.multiplyScalar(u).add(a),o.setXYZ(t,l.x,l.y,l.z);let d=.92+pi(Math.floor(t/10),e,1)*.16;c.push(d,d,d)}a.setAttribute(`color`,new be(c,3));let l=a.getAttribute(`uv`),u=s.getLength(),d=Math.PI*(r+i);for(let e=0;e<l.count;e++)l.setXY(e,l.getY(e)*d,l.getX(e)*u);a.computeVertexNormals(),n.push(a)},i=new j((t()-.5)*.5,1.55,(t()-.5)*.5);r([new j(0,-.05,0),new j(.12,.6,-.05),new j(-.08,1.1,.1),i],.2,.13);let a=[];for(let e=0;e<3;e++){let n=e/3*Math.PI*2+t()*.8,o=new j(i.x+Math.cos(n)*(.7+t()*.3),2.5+t()*.5,i.z+Math.sin(n)*(.7+t()*.3));if(r([i,i.clone().lerp(o,.5).add(new j(0,.15,0)),o],.11,.05),!H)a.push({c:[o.x,o.y+.35,o.z],r:[.95+t()*.3,.55+t()*.15,.95+t()*.3]});else{a.push({c:[o.x,o.y+.3,o.z],r:[.62+t()*.15,.42+t()*.1,.62+t()*.15]});for(let e=0;e<3;e++){let i=n+(e-1)*1.1+(t()-.5)*.5,s=.55+t()*.3,c=new j(o.x+Math.cos(i)*s,o.y+(t()-.35)*.55,o.z+Math.sin(i)*s);r([o,o.clone().lerp(c,.5).add(new j(0,.08,0)),c],.045,.018),a.push({c:[c.x,c.y+.18,c.z],r:[.4+t()*.14,.3+t()*.08,.4+t()*.14]})}}}if(H)for(let e=0;e<2;e++){let n=t()*Math.PI*2;a.push({c:[i.x+Math.cos(n)*.35,3.1+e*.3,i.z+Math.sin(n)*.35],r:[.62-e*.12,.42,.62-e*.12]})}else a.push({c:[i.x,3.25,i.z],r:[1.05,.6,1.05]});return{bois:J(n),houppier:gi(a,Ki,e)}}var Ki={bas:`#4a5a45`,haut:`#8b9c7f`,variation:.08,bosses:.22,frequence:2.4},qi=new Map;function Ji({graine:e=1,ombres:t=!0,allege:n=!1,...r}){let i=H?r.scale??1:1,a=(0,U.useMemo)(()=>(qi.has(e)||qi.set(e,Br(`jardin:olivier:${e}`,()=>Gi(e))),qi.get(e)),[e]),o=Jr(`ecorce`);return(0,K.jsxs)(`group`,{...r,children:[(0,K.jsx)(`mesh`,{geometry:a.bois,castShadow:t,receiveShadow:!0,children:(0,K.jsx)(`meshStandardMaterial`,{...o,vertexColors:!0})}),(0,K.jsx)(Ti,{cle:`olivier:${e}`,volume:a.houppier,feuillage:Ui.olivier,haut:Ki.haut,graine:e,graineImage:9,ombres:t,allege:n,echelle:i,creux:H?.5:void 0})]})}var Yi=new P(1.85,1.85,1.8);function Xi({zone:e=Ei[2],blanc:t=!1}){let[n,r,i,a]=e,o=Jr(`gravier`),s=(0,U.useMemo)(()=>{let e=new ze(r-n,a-i),t=e.attributes.uv;for(let e=0;e<t.count;e++)t.setXY(e,t.getX(e)*(r-n),t.getY(e)*(a-i));return e},[n,r,i,a]);return(0,K.jsx)(`mesh`,{geometry:s,position:[(n+r)/2,.006,(i+a)/2],rotation:[-Math.PI/2,0,0],receiveShadow:!0,children:(0,K.jsx)(`meshStandardMaterial`,{...o,...t?{color:Yi}:{},...Yr(`gravier`)})})}var Zi=V.lumiere,Qi=V.ombres,$i=0;function ea(e=2200){$i=Math.max($i,Ft()+e)}var ta=Zi.ciel,na=new T(new j(Y.x0-2.2,-.2,Y.z0-2.2),new j(Y.x1+2.2,8.8,Y.z1+.8));function ra(e,t=na){let n=new ee;n.position.copy(e),n.lookAt(0,0,0),n.updateMatrixWorld();let r=new j(1/0,1/0,1/0),i=new j(-1/0,-1/0,-1/0),a=new j;for(let e=0;e<8;e++)a.set(e&1?t.max.x:t.min.x,e&2?t.max.y:t.min.y,e&4?t.max.z:t.min.z).applyMatrix4(n.matrixWorldInverse),r.min(a),i.max(a);let o=.5;return{left:r.x-o,right:i.x+o,bottom:r.y-o,top:i.y+o,near:Math.max(.1,-i.z-o),far:-r.z+o}}function ia(e){let{data:t,width:n,height:r}=e.image,i=t instanceof Uint16Array,a=e=>i?Pe.fromHalfFloat(t[e]):t[e],o=t.length/(n*r),s=-1,c=0,l=0;for(let e=0;e<r/2;e+=2)for(let t=0;t<n;t+=2){let r=(e*n+t)*o,i=a(r)*.2126+a(r+1)*.7152+a(r+2)*.0722;i>s&&(s=i,c=t,l=e)}return{bx:c,by:l}}function aa({bx:e,by:t},n,r){let i=(e+.5)/n,a=(t+.5)/r,o=(i-.5)*Math.PI*2,s=(.5-a)*Math.PI,c=Math.min(Math.max(s,Zi.soleilHauteurMin*Math.PI/180),Zi.soleilHauteurMax*Math.PI/180);return new j(Math.cos(c)*Math.cos(o),Math.sin(c),Math.cos(c)*Math.sin(o)).normalize()}function oa(e){let{data:t,width:n,height:r}=e.image,i=t instanceof Uint16Array,a=e=>i?Pe.fromHalfFloat(t[e]):t[e],o=t.length/(n*r),s=[0,0,0],c=0;for(let e=Math.floor(r*.455);e<r/2;e++)for(let t=0;t<n;t+=4){let r=(e*n+t)*o;for(let e=0;e<3;e++)s[e]+=Math.min(a(r+e),4);c++}return new P().setRGB(s[0]/c*Zi.fondIntensite,s[1]/c*Zi.fondIntensite,s[2]/c*Zi.fondIntensite)}var sa=Rt(`ciel-prevu`)?Zi.fondIntensite*Zi.fondEchelle:Zi.fondIntensite;function ca(){let e=c(Zi.fond[Ut===`haute`?`haute`:`standard`]),t=R(e=>e.scene);return(0,U.useLayoutEffect)(()=>{e.mapping=303,e.colorSpace=it;let n=[t.background,t.backgroundIntensity];return t.background=e,t.backgroundIntensity=sa,()=>{t.background===e&&(t.background=n[0],t.backgroundIntensity=n[1])}},[e,t]),null}function la({shadows:e,quality:t,fondNet:n=!1}){let r=o({files:ta}),a=(0,U.useMemo)(()=>{let e=r,{width:t,height:n}=e.image;return aa(ia(e),t,n).multiplyScalar(30)},[r]),s=(0,U.useMemo)(()=>ra(a),[a]),c=R(e=>e.scene),l=(0,U.useMemo)(()=>V.brume.actif?new te(oa(r),V.brume.debut,V.brume.fin):null,[r]);(0,U.useLayoutEffect)(()=>(c.fog=l,l&&(q.uBrumeCouleur.value.copy(l.color),q.uBrumeDist.value.set(l.near,l.far)),()=>{c.fog=null,q.uBrumeDist.value.set(1e9,1e9+1)}),[c,l]);let u=Rt(`ombres-2048`)?Math.min(2048,Qi.taille[t===`haute`?`haute`:`standard`]):Qi.taille[t===`haute`?`haute`:`standard`];(0,U.useLayoutEffect)(()=>{q.uCiel.value=r,q.uSun.value.copy(a).normalize()},[r,a]);let d=(0,U.useRef)(null);return da(e,t),(0,U.useLayoutEffect)(()=>{d.current&&ua(d.current,u)},[u]),(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(i,{map:r,background:!n,environmentIntensity:Zi.cielIntensite,backgroundIntensity:n?sa:Zi.fondIntensite}),n&&(0,K.jsx)(ca,{}),(0,K.jsx)(`directionalLight`,{ref:d,position:a,color:Zi.soleilCouleur,intensity:Zi.soleilIntensite,castShadow:!0,"shadow-intensity":+!!e,"shadow-mapSize":[u,u],"shadow-bias":Qi.biais,"shadow-normalBias":Qi.biaisNormal,"shadow-radius":Qi.douceur,"shadow-camera-left":s.left,"shadow-camera-right":s.right,"shadow-camera-top":s.top,"shadow-camera-bottom":s.bottom,"shadow-camera-near":s.near,"shadow-camera-far":s.far}),(0,K.jsx)(`hemisphereLight`,{args:[Zi.ambianceCiel,Zi.ambianceSol,Zi.ambianceIntensite]})]})}function ua(e,t){if(!Nt(`ombres`)||e.shadow.map)return;let n=new We(t,t,{format:Me});n.texture.name=`${e.name}.shadowMap (couleurs, non lues)`;let r=new Ie(t,t,Ee);r.name=`${e.name}.shadowMap`,r.format=Ue,r.compareFunction=515,r.minFilter=ge,r.magFilter=ge,n.depthTexture=r,e.shadow.map=n,e.shadow.camera.updateProjectionMatrix()}function da(e,t){let n=R(e=>e.gl);(0,U.useEffect)(()=>{n.shadowMap.autoUpdate=!1,ea(3e3)},[n,e,t]),(0,U.useEffect)(()=>{let e=e=>[e.view,e.selected,e.xray,e.tourStep,e.screen,e.valve,e.bypass,e.pool,e.materiel,e.scenePrete],t=e(St());return Dt(()=>{let n=e(St());n.some((e,n)=>e!==t[n])&&ea(),t=n})},[]),I(()=>{e&&Ft()<$i&&(n.shadowMap.needsUpdate=!0)})}function fa(){let e=R(e=>e.gl),n=R(e=>e.scene),r=R(e=>e.camera),i=R(e=>e.advance),a=R(e=>e.invalidate),o=R(e=>e.controls);return(0,U.useEffect)(()=>{if(!o)return;let s=e=>{qt(e*1e3);let t=performance.now();return i(e),performance.now()-t},c={fige:Vt,refonte:H,niveau:Ut,configuration:Or,pret:()=>St().scenePrete&&!t.getState().active,etat:e=>bt(e),lire:()=>{let e=St();return{view:e.view,selected:e.selected,xray:e.xray,screen:e.screen,tourStep:e.tourStep,valve:e.valve,pumpOn:e.pumpOn,pool:e.pool,qualite3d:e.qualite3d,sceneCachee:e.sceneCachee,heure:Kn.valeur}},heure:e=>Jn(e),cam:(e,t,n,r,i,a)=>void o.setLookAt(e,t,n,r,i,a,!1),recentrer:()=>$t.recentrer?.(),decalage:(e,t)=>void o.setFocalOffset(e,t,0,!1),camera:()=>{let e=o.getPosition(new j),t=o.getTarget(new j);return[e.x,e.y,e.z,t.x,t.y,t.z]},graine:Mt,image:s,capture:t=>(s(t),e.domElement.toDataURL(`image/png`)),interne:zt};if(Object.assign(zt,{gl:e,scene:n,camera:r,controles:o,advance:i,invalidate:a,avant:Re,apres:Ye}),Object.assign(window,{__banc:c}),Ht&&!document.querySelector(`script[data-banc]`)){let e=document.createElement(`script`);e.src=`/__banc/auto.js`,e.dataset.banc=`1`,document.head.appendChild(e)}},[e,n,r,i,a,o]),null}var pa={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},ma=class extends wn{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof M?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=we.clone(e.uniforms),this.material=new M({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Dn(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},ha=class extends wn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},ga=class extends wn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},_a=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new F);this._width=n.width,this._height=n.height,t=new We(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ue}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ma(pa),this.copyPass.material.blending=0,this.timer=new _e}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}ha!==void 0&&(r instanceof ha?n=!0:r instanceof ga&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new F);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},va={name:`GTAOShader`,defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new F},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new L},cameraProjectionMatrixInverse:{value:new L},cameraWorldMatrix:{value:new L},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new j(-1,-1,-1)},sceneBoxMax:{value:new j(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).r;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).r;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				#if PERSPECTIVE_CAMERA == 1
					vec3 viewDir = normalize(-viewPos.xyz);
				#else
					vec3 viewDir = vec3(0., 0., 1.);
				#endif
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},ya={name:`GTAODepthShader`,defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},ba={name:`GTAOBlendShader`,uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function xa(e=5){let t=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),n=Sa(t),r=n.length,i=new Uint8Array(r*4);for(let e=0;e<r;++e){let t=n[e],a=2*Math.PI*t/r,o=new j(Math.cos(a),Math.sin(a),0).normalize();i[e*4]=(o.x*.5+.5)*255,i[e*4+1]=(o.y*.5+.5)*255,i[e*4+2]=127,i[e*4+3]=255}let a=new Qe(i,t,t);return a.wrapS=Ke,a.wrapT=Ke,a.needsUpdate=!0,a}function Sa(e){let t=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),n=t*t,r=Array(n).fill(0),i=Math.floor(t/2),a=t-1;for(let e=1;e<=n;)i===-1&&a===t?(a=t-2,i=0):(a===t&&(a=0),i<0&&(i=t-1)),r[i*t+a]===0?(r[i*t+a]=e++,a++,i--):(a-=2,i++);return r}var Ca={name:`PoissonDenoiseShader`,defines:{SAMPLES:16,SAMPLE_VECTORS:wa(16,2,1),NORMAL_VECTOR_TYPE:1},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new F},cameraProjectionMatrixInverse:{value:new L},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).r;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).r;
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function wa(e,t,n){let r=Ta(e,t,n),i=`vec3[SAMPLES](`;for(let t=0;t<e;t++){let n=r[t];i+=`vec3(${n.x}, ${n.y}, ${n.z})${t<e-1?`,`:`)`}`}return i}function Ta(e,t,n){let r=[];for(let i=0;i<e;i++){let a=2*Math.PI*t*i/e,o=(i/(e-1))**n;r.push(new j(Math.cos(a),Math.sin(a),o))}return r}var Ea=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,r,i,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,s=Math.floor(e+o),c=Math.floor(t+o),l=(3-Math.sqrt(3))/6,u=(s+c)*l,d=s-u,f=c-u,p=e-d,m=t-f,h,g;p>m?(h=1,g=0):(h=0,g=1);let _=p-h+l,v=m-g+l,y=p-1+2*l,b=m-1+2*l,x=s&255,S=c&255,C=this.perm[x+this.perm[S]]%12,w=this.perm[x+h+this.perm[S+g]]%12,T=this.perm[x+1+this.perm[S+1]]%12,E=.5-p*p-m*m;E<0?n=0:(E*=E,n=E*E*this._dot(this.grad3[C],p,m));let D=.5-_*_-v*v;D<0?r=0:(D*=D,r=D*D*this._dot(this.grad3[w],_,v));let O=.5-y*y-b*b;return O<0?i=0:(O*=O,i=O*O*this._dot(this.grad3[T],y,b)),70*(n+r+i)}noise3d(e,t,n){let r,i,a,o,s=(e+t+n)*(1/3),c=Math.floor(e+s),l=Math.floor(t+s),u=Math.floor(n+s),d=1/6,f=(c+l+u)*d,p=c-f,m=l-f,h=u-f,g=e-p,_=t-m,v=n-h,y,b,x,S,C,w;g>=_?_>=v?(y=1,b=0,x=0,S=1,C=1,w=0):g>=v?(y=1,b=0,x=0,S=1,C=0,w=1):(y=0,b=0,x=1,S=1,C=0,w=1):_<v?(y=0,b=0,x=1,S=0,C=1,w=1):g<v?(y=0,b=1,x=0,S=0,C=1,w=1):(y=0,b=1,x=0,S=1,C=1,w=0);let T=g-y+d,E=_-b+d,D=v-x+d,O=g-S+2*d,ee=_-C+2*d,te=v-w+2*d,ne=g-1+3*d,re=_-1+3*d,ie=v-1+3*d,k=c&255,ae=l&255,oe=u&255,se=this.perm[k+this.perm[ae+this.perm[oe]]]%12,ce=this.perm[k+y+this.perm[ae+b+this.perm[oe+x]]]%12,A=this.perm[k+S+this.perm[ae+C+this.perm[oe+w]]]%12,le=this.perm[k+1+this.perm[ae+1+this.perm[oe+1]]]%12,ue=.6-g*g-_*_-v*v;ue<0?r=0:(ue*=ue,r=ue*ue*this._dot3(this.grad3[se],g,_,v));let de=.6-T*T-E*E-D*D;de<0?i=0:(de*=de,i=de*de*this._dot3(this.grad3[ce],T,E,D));let fe=.6-O*O-ee*ee-te*te;fe<0?a=0:(fe*=fe,a=fe*fe*this._dot3(this.grad3[A],O,ee,te));let pe=.6-ne*ne-re*re-ie*ie;return pe<0?o=0:(pe*=pe,o=pe*pe*this._dot3(this.grad3[le],ne,re,ie)),32*(r+i+a+o)}noise4d(e,t,n,r){let i=this.grad4,a=this.simplex,o=this.perm,s=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,l,u,d,f,p,m=(e+t+n+r)*s,h=Math.floor(e+m),g=Math.floor(t+m),_=Math.floor(n+m),v=Math.floor(r+m),y=(h+g+_+v)*c,b=h-y,x=g-y,S=_-y,C=v-y,w=e-b,T=t-x,E=n-S,D=r-C,O=w>T?32:0,ee=w>E?16:0,te=T>E?8:0,ne=w>D?4:0,re=T>D?2:0,ie=+(E>D),k=O+ee+te+ne+re+ie,ae=+(a[k][0]>=3),oe=+(a[k][1]>=3),se=+(a[k][2]>=3),ce=+(a[k][3]>=3),A=+(a[k][0]>=2),le=+(a[k][1]>=2),ue=+(a[k][2]>=2),de=+(a[k][3]>=2),fe=+(a[k][0]>=1),pe=+(a[k][1]>=1),me=+(a[k][2]>=1),he=+(a[k][3]>=1),j=w-ae+c,ge=T-oe+c,_e=E-se+c,ve=D-ce+c,M=w-A+2*c,ye=T-le+2*c,be=E-ue+2*c,N=D-de+2*c,xe=w-fe+3*c,Se=T-pe+3*c,Ce=E-me+3*c,we=D-he+3*c,Te=w-1+4*c,Ee=T-1+4*c,De=E-1+4*c,P=D-1+4*c,F=h&255,Oe=g&255,ke=_&255,Ae=v&255,je=o[F+o[Oe+o[ke+o[Ae]]]]%32,Me=o[F+ae+o[Oe+oe+o[ke+se+o[Ae+ce]]]]%32,Ne=o[F+A+o[Oe+le+o[ke+ue+o[Ae+de]]]]%32,Pe=o[F+fe+o[Oe+pe+o[ke+me+o[Ae+he]]]]%32,Fe=o[F+1+o[Oe+1+o[ke+1+o[Ae+1]]]]%32,Ie=.6-w*w-T*T-E*E-D*D;Ie<0?l=0:(Ie*=Ie,l=Ie*Ie*this._dot4(i[je],w,T,E,D));let Le=.6-j*j-ge*ge-_e*_e-ve*ve;Le<0?u=0:(Le*=Le,u=Le*Le*this._dot4(i[Me],j,ge,_e,ve));let Re=.6-M*M-ye*ye-be*be-N*N;Re<0?d=0:(Re*=Re,d=Re*Re*this._dot4(i[Ne],M,ye,be,N));let ze=.6-xe*xe-Se*Se-Ce*Ce-we*we;ze<0?f=0:(ze*=ze,f=ze*ze*this._dot4(i[Pe],xe,Se,Ce,we));let Be=.6-Te*Te-Ee*Ee-De*De-P*P;return Be<0?p=0:(Be*=Be,p=Be*Be*this._dot4(i[Fe],Te,Ee,De,P)),27*(l+u+d+f+p)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,r){return e[0]*t+e[1]*n+e[2]*r}_dot4(e,t,n,r,i){return e[0]*t+e[1]*n+e[2]*r+e[3]*i}},Da=class e extends wn{constructor(e,t,n=512,r=512,i,a,o){super(),this.width=n,this.height=r,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=xa(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new We(this.width,this.height,{type:ue,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new M({defines:Object.assign({},va.defines),uniforms:we.clone(va.uniforms),vertexShader:va.vertexShader,fragmentShader:va.fragmentShader,blending:0,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=+!!this.camera.isPerspectiveCamera,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Fe,this.normalMaterial.blending=0,this.pdMaterial=new M({defines:Object.assign({},Ca.defines),uniforms:we.clone(Ca.uniforms),vertexShader:Ca.vertexShader,fragmentShader:Ca.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new M({defines:Object.assign({},ya.defines),uniforms:we.clone(ya.uniforms),vertexShader:ya.vertexShader,fragmentShader:ya.fragmentShader,blending:0}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new M({uniforms:we.clone(pa.uniforms),vertexShader:pa.vertexShader,fragmentShader:pa.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this.blendMaterial=new M({uniforms:we.clone(ba.uniforms),vertexShader:ba.vertexShader,fragmentShader:ba.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:5,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this._fsQuad=new Dn(null),this._originalClearColor=new P,this.setGBuffer(i?i.depthTexture:void 0,i?i.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget&&this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget&&this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){if(e!==void 0)this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1;else{if(this.normalRenderTarget===void 0){let e=new Ie;e.format=Le,e.type=Je,this.normalRenderTarget=new We(this.width,this.height,{minFilter:et,magFilter:et,type:ue,depthTexture:e})}this.depthTexture=this.normalRenderTarget.depthTexture,this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0}let n=+!!this.normalTexture;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.needsUpdate=!0,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.needsUpdate=!0,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&+!!e.screenSpaceRadius!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=+!!e.screenSpaceRadius,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=wa(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,n,r){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case e.OUTPUT.Off:break;case e.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalTexture||null,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:n);break;default:console.warn(`THREE.GTAOPass: Unknown output type.`)}}_renderPass(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r=t.clearColor||r,i=t.clearAlpha||i,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(e){(e.isPoints||e.isLine||e.isLine2)&&e.visible&&(e.visible=!1,t.push(e))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new Ea,n=e*e*4,r=new Uint8Array(n);for(let n=0;n<e;n++)for(let i=0;i<e;i++){let a=n,o=i;r[(n*e+i)*4]=(t.noise(a,o)*.5+.5)*255,r[(n*e+i)*4+1]=(t.noise(a+e,o)*.5+.5)*255,r[(n*e+i)*4+2]=(t.noise(a,o+e)*.5+.5)*255,r[(n*e+i)*4+3]=(t.noise(a+e,o+e)*.5+.5)*255}let i=new Qe(r,e,e,Ce,ie);return i.wrapS=Ke,i.wrapT=Ke,i.needsUpdate=!0,i}};Da.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Oa={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},ka=class extends wn{constructor(){super(),this.isOutputPass=!0,this.uniforms=we.clone(Oa.uniforms),this.material=new ke({name:Oa.name,uniforms:this.uniforms,vertexShader:Oa.vertexShader,fragmentShader:Oa.fragmentShader}),this._fsQuad=new Dn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},he.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Aa=class extends wn{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new P}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},ja={name:`SMAAEdgesShader`,defines:{SMAA_THRESHOLD:`0.1`},uniforms:{tDiffuse:{value:null},resolution:{value:new F(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}`},Ma={name:`SMAAWeightsShader`,defines:{SMAA_MAX_SEARCH_STEPS:`8`,SMAA_AREATEX_MAX_DISTANCE:`16`,SMAA_AREATEX_PIXEL_SIZE:`( 1.0 / vec2( 160.0, 560.0 ) )`,SMAA_AREATEX_SUBTEX_SIZE:`( 1.0 / 7.0 )`},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new F(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}`},Na={name:`SMAABlendShader`,uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new F(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}`},Pa=class extends wn{constructor(){super(),this._edgesRT=new We(1,1,{depthBuffer:!1,type:ue}),this._edgesRT.texture.name=`SMAAPass.edges`,this._weightsRT=new We(1,1,{depthBuffer:!1,type:ue}),this._weightsRT.texture.name=`SMAAPass.weights`;let e=this,t=new Image;t.src=this._getAreaTexture(),t.onload=function(){e._areaTexture.needsUpdate=!0},this._areaTexture=new oe,this._areaTexture.name=`SMAAPass.area`,this._areaTexture.image=t,this._areaTexture.minFilter=ge,this._areaTexture.generateMipmaps=!1,this._areaTexture.flipY=!1;let n=new Image;n.src=this._getSearchTexture(),n.onload=function(){e._searchTexture.needsUpdate=!0},this._searchTexture=new oe,this._searchTexture.name=`SMAAPass.search`,this._searchTexture.image=n,this._searchTexture.magFilter=et,this._searchTexture.minFilter=et,this._searchTexture.generateMipmaps=!1,this._searchTexture.flipY=!1,this._uniformsEdges=we.clone(ja.uniforms),this._materialEdges=new M({defines:Object.assign({},ja.defines),uniforms:this._uniformsEdges,vertexShader:ja.vertexShader,fragmentShader:ja.fragmentShader}),this._uniformsWeights=we.clone(Ma.uniforms),this._uniformsWeights.tDiffuse.value=this._edgesRT.texture,this._uniformsWeights.tArea.value=this._areaTexture,this._uniformsWeights.tSearch.value=this._searchTexture,this._materialWeights=new M({defines:Object.assign({},Ma.defines),uniforms:this._uniformsWeights,vertexShader:Ma.vertexShader,fragmentShader:Ma.fragmentShader}),this._uniformsBlend=we.clone(Na.uniforms),this._uniformsBlend.tDiffuse.value=this._weightsRT.texture,this._materialBlend=new M({uniforms:this._uniformsBlend,vertexShader:Na.vertexShader,fragmentShader:Na.fragmentShader}),this._fsQuad=new Dn(null)}render(e,t,n){this._uniformsEdges.tDiffuse.value=n.texture,this._fsQuad.material=this._materialEdges,e.setRenderTarget(this._edgesRT),this.clear&&e.clear(),this._fsQuad.render(e),this._fsQuad.material=this._materialWeights,e.setRenderTarget(this._weightsRT),this.clear&&e.clear(),this._fsQuad.render(e),this._uniformsBlend.tColor.value=n.texture,this._fsQuad.material=this._materialBlend,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this._fsQuad.render(e))}setSize(e,t){this._edgesRT.setSize(e,t),this._weightsRT.setSize(e,t),this._materialEdges.uniforms.resolution.value.set(1/e,1/t),this._materialWeights.uniforms.resolution.value.set(1/e,1/t),this._materialBlend.uniforms.resolution.value.set(1/e,1/t)}dispose(){this._edgesRT.dispose(),this._weightsRT.dispose(),this._areaTexture.dispose(),this._searchTexture.dispose(),this._materialEdges.dispose(),this._materialWeights.dispose(),this._materialBlend.dispose(),this._fsQuad.dispose()}_getAreaTexture(){return`data:image/png;base64,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`}_getSearchTexture(){return`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII=`}},Fa={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new P(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},Ia=class e extends wn{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new F(256,256):new F(e.x,e.y),this.clearColor=new P(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new We(i,a,{type:ue,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new We(i,a,{type:ue,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new We(i,a,{type:ue,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=Fa;this.highPassUniforms=we.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new M({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new F(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new j(1,1,1),new j(1,1,1),new j(1,1,1),new j(1,1,1),new j(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=we.clone(pa.uniforms),this.blendMaterial=new M({uniforms:this.copyUniforms,vertexShader:pa.vertexShader,fragmentShader:pa.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new P,this._oldClearAlpha=1,this._basic=new Ne,this._fsQuad=new Dn(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new F(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new M({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new F(.5,.5)},direction:{value:new F(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new M({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Ia.BlurDirectionX=new F(1,0),Ia.BlurDirectionY=new F(0,1);var La=new WeakSet,Ra=new M({uniforms:{tDiffuse:{value:null}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
    uniform sampler2D tDiffuse;
    varying vec2 vUv;
    void main() { gl_FragColor = texture2D(tDiffuse, vUv); }`,depthTest:!1,depthWrite:!1}),za=class extends _a{imageScene;report=new Dn(Ra);constructor(e,t){super(e,new We(1,1,{type:ue,depthBuffer:!1})),this.imageScene=t}setSize(e,t){super.setSize(e,t),this.imageScene.setSize(this.renderTarget1.width,this.renderTarget1.height)}render(e=0){let t=this.renderer,n=t.getRenderTarget(),r=this.imageScene,i=this.renderTarget1,a=this.renderTarget2;for(let n=0;n<this.passes.length;n++){let o=this.passes[n];if(o.enabled&&(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),o.needsSwap||r!==this.imageScene||La.has(o)||o.renderToScreen||(Ra.uniforms.tDiffuse.value=r.texture,t.setRenderTarget(i),this.report.render(t),r=i,i=a),o.render(t,i,r,e,!1),o.needsSwap)){if(r===this.imageScene)r=i,i=a;else{let e=r;r=i,i=e}}}t.setRenderTarget(n)}dispose(){super.dispose(),this.imageScene.dispose(),this.report.dispose()}},Ba={uniforms:{tDiffuse:{value:null},tScene:q.uScene,uTexel:{value:new F(1/1600,1/1e3)},uAspect:{value:1.6},uNet:{value:5},uFlou:{value:0},uSoleil:{value:new F(.5,.5)},uRayons:{value:0},uTeinte:{value:new P(1,.9,.7)}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform sampler2D tScene;
    uniform vec2 uTexel, uSoleil;
    uniform float uAspect, uNet, uFlou, uRayons;
    uniform vec3 uTeinte;
    varying vec2 vUv;

    // rayon du flou d'un point selon sa distance : nul à la distance de mise au point
    float flouDe(float d) { return clamp(abs(1.0 / uNet - 1.0 / max(d, 0.05)) * uNet * 1.15 - 0.06, 0.0, 1.0) * uFlou; }

    void main() {
      vec3 col = texture2D(tDiffuse, vUv).rgb;
      if (uFlou > 0.01) {
        float moi = flouDe(texture2D(tScene, vUv).a);
        if (moi > 0.02) {
          // 14 prises en spirale ; un voisin net ne bave pas sur un point flou
          vec3 somme = col;
          float poids = 1.0;
          for (int i = 0; i < 14; i++) {
            float fi = float(i) + 0.5;
            float a = fi * 2.39996;
            vec2 o = vec2(cos(a), sin(a)) * sqrt(fi / 14.0) * moi * 13.0 * uTexel;
            vec2 uv = vUv + o;
            float lui = flouDe(texture2D(tScene, uv).a);
            float p = 0.15 + smoothstep(0.0, 0.3, lui);
            somme += texture2D(tDiffuse, uv).rgb * p;
            poids += p;
          }
          col = somme / poids;
        }
      }
      if (uRayons > 0.005) {
        // on avance du point vers le soleil : plus on croise de ciel lumineux, plus le rayon est fort
        vec2 pas = (uSoleil - vUv) / 22.0;
        float lum = 0.0, poids = 1.0;
        vec2 uv = vUv;
        for (int i = 0; i < 22; i++) {
          uv += pas;
          float ciel = step(2300.0, texture2D(tScene, uv).a);
          float pres = max(1.0 - length((uv - uSoleil) * vec2(uAspect, 1.0)) / 0.42, 0.0);
          lum += ciel * pres * pres * poids;
          poids *= 0.955;
        }
        float halo = max(1.0 - length((vUv - uSoleil) * vec2(uAspect, 1.0)) / 1.3, 0.0);
        col += uTeinte * (lum / 22.0) * uRayons * (0.35 + halo * halo);
      }
      gl_FragColor = vec4(col, 1.0);
    }`};function Va(){let e=new ma(Ba);return e.uniforms.tScene=q.uScene,e.enabled=!1,e}var Ha=new j,Ua=new j;function Wa(e,t,n,r,i,a){let o=e.uniforms;o.uTexel.value.set(1/r,1/i),o.uAspect.value=r/i;let s=St(),c=(s.selected!==null||s.tourStep!==null)&&s.screen===null&&!s.xray;o.uFlou.value+=(+!!c-o.uFlou.value)*Math.min(1,a*3),n?.getTarget&&(o.uNet.value=Math.max(.6,t.position.distanceTo(n.getTarget(Ua)))),Ha.copy(G.soleil).multiplyScalar(1500).add(t.position).project(t);let l=Ha.z<1&&G.soleil.y>-.04,u=Math.max(0,1-Math.max(0,Math.max(Math.abs(Ha.x),Math.abs(Ha.y))-1)/.6);o.uSoleil.value.set(Ha.x*.5+.5,Ha.y*.5+.5),o.uRayons.value=l?u*(.5+1.1*G.crepuscule)*Math.min(1,G.intensite/1.5+G.crepuscule):0,o.uTeinte.value.copy(G.teinteSoleil),e.enabled=o.uFlou.value>.01||o.uRayons.value>.005}var Ga=V.eau,Ka={uniforms:{tDiffuse:{value:null},tScene:q.uScene,uTemps:q.uTime,uAstre:q.uAstre,uProjecteur:q.uProjecteur,uProjCouleur:q.uProjCouleur,uSoleil:q.uSun,uInvProj:{value:new L},uCamMonde:{value:new L},uCamPos:{value:new j},uAbsorb:{value:new j(...Ga.absorption).multiplyScalar(1.45)},uDiffusion:{value:new P(Ga.diffusionCouleur).convertSRGBToLinear().multiplyScalar(Ga.diffusionForce)},uBassin:{value:new C(W.x0,W.x1,W.z0,W.z1)}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform sampler2D tScene;
    uniform float uTemps;
    uniform vec3 uAstre, uProjCouleur, uCamPos, uAbsorb, uDiffusion;
    uniform vec4 uProjecteur, uBassin;
    uniform vec3 uSoleil;
    float rH(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
    float rN(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
      return mix(mix(rH(i), rH(i + vec2(1.0, 0.0)), f.x), mix(rH(i + vec2(0.0, 1.0)), rH(i + vec2(1.0, 1.0)), f.x), f.y); }
    uniform mat4 uInvProj, uCamMonde;
    varying vec2 vUv;
    void main() {
      // l'image ondule doucement, comme vue à travers l'eau en mouvement
      vec2 uv = vUv + vec2(sin(vUv.y * 17.0 + uTemps * 1.3), cos(vUv.x * 13.0 + uTemps * 1.1)) * 0.0022;
      vec3 col = texture2D(tDiffuse, uv).rgb;
      // direction du regard pour ce point de l'image
      vec4 v = uInvProj * vec4(vUv * 2.0 - 1.0, 1.0, 1.0);
      vec3 dirV = normalize(v.xyz / v.w);
      vec3 dir = normalize((uCamMonde * vec4(dirV, 0.0)).xyz);
      // longueur d'eau traversée : jusqu'à l'objet vu, à la surface, ou à une paroi du bassin
      float d = texture2D(tScene, uv).a / max(-dirV.z, 1e-3);
      if (dir.y > 1e-4) d = min(d, (${mr.toFixed(3)} - uCamPos.y) / dir.y);
      if (dir.x > 1e-4) d = min(d, (uBassin.y - uCamPos.x) / dir.x); else if (dir.x < -1e-4) d = min(d, (uBassin.x - uCamPos.x) / dir.x);
      if (dir.z > 1e-4) d = min(d, (uBassin.w - uCamPos.z) / dir.z); else if (dir.z < -1e-4) d = min(d, (uBassin.z - uCamPos.z) / dir.z);
      d = max(d, 0.0);
      float lum = clamp(dot(uAstre, vec3(0.37)), 0.03, 1.0);
      vec3 diffusion = uDiffusion * lum + uProjCouleur * uProjecteur.w * 0.16;
      col = col * exp(-uAbsorb * d * 0.8) + diffusion * (1.0 - exp(-uAbsorb * d * 0.55));
      // rayons de lumière : le soleil entre par les vaguelettes en faisceaux ; on additionne, le long du regard, la
      // lumière des faisceaux traversés (chaque point est ramené à la surface dans la direction du soleil)
      if (uSoleil.y > 0.08) {
        float rayons = 0.0;
        for (int i = 0; i < 10; i++) {
          vec3 pt = uCamPos + dir * d * (float(i) + 0.5) / 10.0;
          vec2 ps = pt.xz + uSoleil.xz * ((${mr.toFixed(3)} - pt.y) / uSoleil.y);
          float f = rN(ps * 2.6 + uTemps * vec2(0.11, 0.07)) * rN(ps * 6.5 - uTemps * vec2(0.09, 0.13));
          rayons += smoothstep(0.22, 0.6, f);
        }
        col += uAstre * vec3(0.55, 0.85, 0.9) * rayons * 0.1 * min(d, 5.0) * 0.06 * smoothstep(0.08, 0.3, uSoleil.y);
      }
      // projecteur allumé : son faisceau éclaire l'eau elle-même, le long du regard
      if (uProjecteur.w > 0.001) {
        vec3 seg = dir * d;
        float tt = clamp(dot(uProjecteur.xyz - uCamPos, seg) / max(dot(seg, seg), 1e-4), 0.0, 1.0);
        float dl = distance(uCamPos + seg * tt, uProjecteur.xyz);
        col += uProjCouleur * uProjecteur.w * 0.05 * min(d, 4.0) / (0.6 + dl * dl);
      }
      // bords de l'image un peu plus sombres : l'effet de masque de plongée
      vec2 c = vUv - 0.5;
      col *= 1.0 - 0.35 * smoothstep(0.25, 0.75, dot(c, c) * 2.0);
      gl_FragColor = vec4(col, 1.0);
    }`};function qa(){let e=new ma(Ka);return Object.assign(e.uniforms,{tScene:q.uScene,uTemps:q.uTime,uAstre:q.uAstre,uProjecteur:q.uProjecteur,uProjCouleur:q.uProjCouleur,uSoleil:q.uSun}),e.enabled=!1,e}function Ja(e){let{x:t,y:n,z:r}=e.position;return n<-.13&&t>W.x0&&t<W.x1&&r>W.z0&&r<W.z1}function Ya(e,t){e.enabled=Ja(t),e.enabled&&(e.uniforms.uInvProj.value.copy(t.projectionMatrixInverse),e.uniforms.uCamMonde.value.copy(t.matrixWorld),e.uniforms.uCamPos.value.copy(t.position))}var Xa=new M({uniforms:{tCouleur:{value:null},tProfondeur:{value:null},uNear:{value:.1},uFar:{value:1e3}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
    #include <packing>
    uniform sampler2D tCouleur;
    uniform sampler2D tProfondeur;
    uniform float uNear, uFar;
    varying vec2 vUv;
    void main() {
      float z = texture2D(tProfondeur, vUv).x;
      gl_FragColor = vec4(texture2D(tCouleur, vUv).rgb, -perspectiveDepthToViewZ(z, uNear, uFar));
    }`,depthTest:!1,depthWrite:!1}),Za=new j(0,mr,0),Qa=new j(0,1,0),$a=new j,eo=new j,to=new j,no=new L,ro=new w,io=new C,ao=new C,oo=new He,so=new L,co=new ye;co.matrixWorldAutoUpdate=!1;var lo=class extends wn{copie=new We(1,1,{type:ue,depthBuffer:!1});quad=new Dn(Xa);reflet;miroir=new Ve;scene;camera;resolutionReflet;alterne=!1;tailleMini=0;petits=[];petitsPour=-1;petitsAge=0;image=0;refletPret=!1;constructor(e,t,n,r){super(),this.scene=e,this.camera=t,this.needsSwap=!1,this.resolutionReflet=r,this.reflet=n?new We(1,1,{type:ue}):null,q.uRefletActif.value=+!!n,q.uReflet.value=this.reflet?.texture??null}setSize(e,t){this.copie.setSize(e,t),this.reflet?.setSize(Math.max(1,Math.round(e*this.resolutionReflet)),Math.max(1,Math.round(t*this.resolutionReflet))),this.refletPret=!1}render(e,t,n){let r=this.camera;Xa.uniforms.tCouleur.value=n.texture,Xa.uniforms.tProfondeur.value=n.depthTexture,Xa.uniforms.uNear.value=r.near,Xa.uniforms.uFar.value=r.far,e.setRenderTarget(this.copie),this.quad.render(e),q.uScene.value=this.copie.texture,this.image++,this.reflet&&(!Nt(`reflet`)||this.eauDansLeChamp(r))?this.alterne&&this.refletPret&&this.image%2!=0||(this.dessinerReflet(e,r),this.refletPret=!0):this.refletPret=!1;let i=q.surface;if(!i)return;let a=r.layers.mask,o=e.autoClear;if(r.layers.set(1),e.autoClear=!1,e.setRenderTarget(n),Nt(`eau`)){co.children.length=0,co.children.push(i,...q.apres);let t=n.resolveDepthBuffer;n.resolveDepthBuffer=!1,e.render(co,r),n.resolveDepthBuffer=t,co.children.length=0}else e.render(i,r),q.apres.forEach(t=>e.render(t,r));e.autoClear=o,r.layers.mask=a}eauDansLeChamp(e){let t=q.surface;if(!t)return!1;let n=t.geometry;n.boundingBox||n.computeBoundingBox();let{min:r,max:i}=n.boundingBox,a=[new j(r.x,r.y,0),new j(i.x,r.y,0),new j(i.x,i.y,0),new j(r.x,i.y,0)];for(let e of a)e.applyMatrix4(t.matrixWorld);oo.setFromProjectionMatrix(so.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse));for(let e of oo.planes){let t=a.map(t=>e.distanceToPoint(t)+.05),n=[];for(let e=0;e<a.length;e++){let r=(e+1)%a.length;t[e]>=0&&n.push(a[e]),t[e]>=0!=t[r]>=0&&n.push(a[e].clone().lerp(a[r],t[e]/(t[e]-t[r])))}if(n.length<3)return!1;a=n}return!0}petitsObjets(){return this.tailleMini<=0?[]:((this.petitsPour!==this.tailleMini||this.petitsAge--<=0)&&(this.petitsPour=this.tailleMini,this.petitsAge=90,this.petits=[],this.scene.traverse(e=>{let t=e;if(!t.isMesh||t.children.length||!t.geometry)return;t.geometry.boundingSphere||t.geometry.computeBoundingSphere();let n=t.boundingSphere??t.geometry.boundingSphere;n&&n.radius*t.matrixWorld.getMaxScaleOnAxis()<this.tailleMini&&this.petits.push(t)})),this.petits)}dessinerReflet(e,t){if($a.setFromMatrixPosition(t.matrixWorld),$a.y<=-.12)return;no.extractRotation(t.matrixWorld),eo.copy(Za).sub($a).reflect(Qa).negate().add(Za),to.set(0,0,-1).applyMatrix4(no).add($a),to.subVectors(Za,to).reflect(Qa).negate().add(Za);let n=this.miroir;n.position.copy(eo),n.up.set(0,1,0).applyMatrix4(no).reflect(Qa),n.lookAt(to),n.far=t.far,n.updateMatrixWorld(),n.projectionMatrix.copy(t.projectionMatrix),q.uRefletMatrice.value.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1).multiply(n.projectionMatrix).multiply(n.matrixWorldInverse),ro.setFromNormalAndCoplanarPoint(Qa,Za).applyMatrix4(n.matrixWorldInverse);let r=io.set(ro.normal.x,ro.normal.y,ro.normal.z,ro.constant),i=n.projectionMatrix.elements,a=ao.set((Math.sign(r.x)+i[8])/i[0],(Math.sign(r.y)+i[9])/i[5],-1,(1+i[10])/i[14]);r.multiplyScalar(2/r.dot(a)),i[2]=r.x,i[6]=r.y,i[10]=r.z+1-.003,i[14]=r.w,n.projectionMatrixInverse.copy(n.projectionMatrix).invert(),e.setRenderTarget(this.reflet),e.clear();let o=[...Vn,...this.petitsObjets()].filter(e=>e.visible);o.forEach(e=>e.visible=!1),e.render(this.scene,n),o.forEach(e=>e.visible=!0)}dispose(){this.copie.dispose(),this.reflet?.dispose(),this.quad.dispose(),q.uRefletActif.value=0,q.uReflet.value=null,q.uScene.value=null}},uo=V.contour,fo=new Map;function po(e,t){return fo.has(e)||fo.set(e,new Set),fo.get(e).add(t),()=>void fo.get(e)?.delete(t)}var mo=new Set([`canalisations`]),ho=new M({uniforms:{tScene:{value:null},uTaille:{value:new F(1,1)}},vertexShader:`
    varying float vDistance;
    void main() {
      #include <begin_vertex>
      #include <project_vertex>
      vDistance = -mvPosition.z;
    }`,fragmentShader:`
    uniform sampler2D tScene;
    uniform vec2 uTaille;
    varying float vDistance;
    void main() {
      // distance du premier objet de la scène en ce point (copie faite pour l'eau, passeEau.ts)
      float scene = texture2D(tScene, gl_FragCoord.xy / uTaille).a;
      if (vDistance > scene * 1.006 + 0.02) discard;
      gl_FragColor = vec4(1.0);
    }`,side:2,depthTest:!1,depthWrite:!1}),go=[[1,0],[.7071,.7071],[0,1],[-.7071,.7071],[-1,0],[-.7071,-.7071],[0,-1],[.7071,-.7071]],_o=(e,t)=>go.map(([n,r])=>`${t} = max(${t}, texture2D(tMasque, vUv + vec2(${n.toFixed(4)}, ${r.toFixed(4)}) * ${e} * uPas).r);`).join(`
      `),vo={uniforms:{tDiffuse:{value:null},tMasque:{value:null},uPas:{value:new F(1,1)},uForce:{value:0},uEpaisseur:{value:uo.epaisseur},uAttenuation:{value:0},uCouleur:{value:new P(uo.couleur)},uOmbre:{value:new P(uo.ombre)},uOmbreForce:{value:uo.ombreForce}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
    uniform sampler2D tDiffuse, tMasque;
    uniform vec2 uPas;
    uniform float uForce, uEpaisseur, uAttenuation, uOmbreForce;
    uniform vec3 uCouleur, uOmbre;
    varying vec2 vUv;
    void main() {
      vec3 c = texture2D(tDiffuse, vUv).rgb;
      float dedans = texture2D(tMasque, vUv).r;
      float proche = dedans;
      float loin = dedans;
      ${_o(`uEpaisseur`,`proche`)}
      ${_o(`(uEpaisseur * 2.0 + 1.0)`,`loin`)}
      // le reste de l'image s'efface un peu : moins de couleur, un peu plus sombre
      float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
      c = mix(c, mix(vec3(l), c, 0.55) * 0.78, uAttenuation * uForce * (1.0 - proche));
      // liseré sombre, puis liseré clair collé à la silhouette
      c = mix(c, uOmbre, (loin - proche) * uOmbreForce * uForce);
      c = mix(c, uCouleur, (proche - dedans) * uForce);
      gl_FragColor = vec4(c, 1.0);
    }`};function yo(){let e=St(),t=e.selected??(e.tourStep===null?null:lt(e.pool)[e.tourStep]?.equipment??null),n=t??e.hovered;return{id:n&&!mo.has(n)?n:null,ouvert:!!t}}var bo=e=>{for(let t=e;t;t=t.parent)if(!t.visible)return!1;return!0},xo=class extends wn{masque=new We(1,1,{samples:4,depthBuffer:!1});quad=new Dn(new M(vo));camera;largeur=1;hauteur=1;force=0;groupes=[];ouvert=!1;constructor(e){super(),this.camera=e,this.enabled=!1}setSize(e,t){this.largeur=e,this.hauteur=t}preparer(e){let{id:t,ouvert:n}=yo(),r=t?[...fo.get(t)??[]].filter(bo):[];r.length&&(this.groupes=r,this.ouvert=n);let i=Math.min(e,.1)/uo.fondu;this.force=Math.min(1,Math.max(0,this.force+(r.length?i:-i))),this.force===0&&(this.groupes=[]),this.enabled=this.force>0&&this.groupes.length>0}render(e,t,n){let r=e.getPixelRatio(),i=Math.max(1,Math.round(this.largeur/r)),a=Math.max(1,Math.round(this.hauteur/r));(this.masque.width!==i||this.masque.height!==a)&&this.masque.setSize(i,a);let o=[],s=[];for(let e of this.groupes)e.traverseVisible(e=>{let t=e;t.isMesh&&(o.push(t),s.push(t.material),t.material=ho)});ho.uniforms.tScene.value=q.uScene.value,ho.uniforms.uTaille.value.set(i,a);let c=e.autoClear,l=e.getClearAlpha();e.setRenderTarget(this.masque),e.setClearAlpha(0),e.clear(),e.autoClear=!1;for(let t of this.groupes)e.render(t,this.camera);e.autoClear=c,e.setClearAlpha(l),o.forEach((e,t)=>e.material=s[t]);let u=this.quad.material.uniforms;u.tDiffuse.value=n.texture,u.tMasque.value=this.masque.texture,u.uPas.value.set(1/i,1/a),u.uForce.value=this.force,u.uEpaisseur.value=this.ouvert?uo.epaisseur:uo.epaisseurSurvol,u.uAttenuation.value=this.ouvert?uo.attenuation:0,e.setRenderTarget(this.renderToScreen?null:t),this.quad.render(e)}dispose(){this.masque.dispose(),this.quad.material.dispose(),this.quad.dispose()}},So=typeof window<`u`&&new URLSearchParams(window.location.search).has(`reglages`),Co=V.couleurs,wo={neutral:7,agx:6,aces:4};function To(e){let t=[e.toneMapping,e.toneMappingExposure];return e.toneMapping=wo[Co.conversion],e.toneMappingExposure=Co.exposition,()=>{e.toneMapping=t[0],e.toneMappingExposure=t[1]}}var Eo={uniforms:{tDiffuse:{value:null},uChaleur:{value:Co.chaleur},uSaturation:{value:Co.saturation},uContraste:{value:Co.contraste},uOmbres:{value:Co.ombresBleutees},uVignette:{value:Co.vignette},uVerts:{value:Co.vertsAdoucis},uAspect:{value:1}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uChaleur, uSaturation, uContraste, uOmbres, uVignette, uAspect, uVerts;
    varying vec2 vUv;
    void main() {
      vec4 t = texture2D(tDiffuse, vUv);
      vec3 c = t.rgb;
      float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
      c = mix(vec3(l), c, uSaturation);
      float vert = clamp((c.g - max(c.r, c.b)) * 4.0, 0.0, 1.0);
      c = mix(c, mix(vec3(l), c, 0.55) + vec3(0.012, 0.0, -0.01), vert * uVerts);
      c = mix(c, c * c * (3.0 - 2.0 * c), uContraste);
      c += vec3(uChaleur, uChaleur * 0.45, -uChaleur * 0.6) * smoothstep(0.35, 1.0, l);
      c += vec3(-uOmbres * 0.6, uOmbres * 0.15, uOmbres) * (1.0 - smoothstep(0.0, 0.45, l));
      vec2 d = (vUv - 0.5) * vec2(uAspect, 1.0);
      c *= 1.0 - uVignette * smoothstep(0.35, 1.05, length(d));
      // image finale opaque : three.js crée toujours un écran avec transparence ; la transparence des bords de feuilles
      // (lissage « alpha to coverage ») y laissait voir le fond de la page en liserés gris clair
      gl_FragColor = vec4(clamp(c, 0.0, 1.0), 1.0);
    }`},Do={resolution:1};function Oo({quality:e,allege:t=Do}){let{gl:n,scene:r,camera:i,size:a}=R(),o=e===`haute`,s=t.lissage===2||Rt(`msaa-2`),c=t.reflet===`demi`||Rt(`reflet-demi`),l=t.ombresContact===`demi`||Rt(`ao-demi`)?.5:1,u=!!t.alterne||Rt(`alterne`),d=!!t.refletGrands||Rt(`reflet-grands`),f=t.releve===`profondeur`||Rt(`ao-profondeur`),p=V.ombres.contact[o?`haute`:`standard`]&&!Rt(`sans-ao`),m=R(e=>e.controls),{composer:h,ao:g,grade:_,eau:v,cinema:y,sousEau:b,contour:x}=(0,U.useMemo)(()=>{let e=new We(1,1,{type:ue,samples:s?2:Gt&&!It?8:V.nettete.msaa[o?`haute`:`standard`],depthTexture:new Ie(1,1)}),t=Nt(`lissage`)?new za(n,e):new _a(n,e),a=new Aa(r,i);t.addPass(a);let l=new lo(r,i,V.eau.refletDecor[o?`haute`:`standard`]&&!Rt(`sans-reflet`),Gt&&!c&&!It?1:V.eau.refletResolution);t.addPass(l),La.add(a),La.add(l);let u=H?qa():null;u&&t.addPass(u);let d=null,m=0;if(p){d=Kt(7,()=>new Da(r,i,1,1,f&&e.depthTexture?{depthTexture:e.depthTexture}:void 0));let n=It?8:12;if(d.updateGtaoMaterial({radius:V.ombres.contactRayon,distanceExponent:1.4,thickness:2,scale:1,samples:n,distanceFallOff:1,screenSpaceRadius:!1}),d.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:n}),d.blendIntensity=V.ombres.contactIntensite,f){let e=d.gtaoMaterial;e.fragmentShader=e.fragmentShader.replace(`ao = pow(ao, scale);`,`ao = pow(ao, scale);\n\t\t\tao = mix(ao, 1., smoothstep(${V.ombres.contactLoin[0].toFixed(1)}, ${V.ombres.contactLoin[1].toFixed(1)}, length(viewPos)));`),e.uniforms.tMasque={value:null},e.fragmentShader=`uniform sampler2D tMasque;
`+e.fragmentShader.replace(`ao = pow(ao, scale);`,`ao = pow(ao, scale);
			ao = mix(1., ao, texture2D(tMasque, vUv).a);`),e.needsUpdate=!0;let t=d.render.bind(d);d.render=(n,r,i,...a)=>{e.uniforms.tMasque.value=i.texture,t(n,r,i,...a)}}let a=d,o=a._renderOverride.bind(d),s=!1;a._renderOverride=(...e)=>{let t=e[2];if(l.alterne&&s&&t?.width===m&&l.image%2==0)return;s=!0,m=t?.width??0;let n=[...Bn].filter(e=>e.visible);n.forEach(e=>e.visible=!1),o(...e),n.forEach(e=>e.visible=!0)},t.addPass(d)}let h=H&&o&&Xt(`cinema`)?Va():null;h&&t.addPass(h),H&&o&&Xt(`halo`)&&t.addPass(new Ia(new F(256,256),.26,.55,1.5)),t.addPass(new ka);let g=new ma(Eo);t.addPass(g),H&&o&&Xt(`smaa`)&&!It&&t.addPass(new Pa);let _=new xo(i);return t.addPass(_),So&&Object.assign(window,{__reglages:{etalonnage:g.uniforms,gtao:d}}),{composer:t,ao:d,grade:g,eau:l,cinema:h,sousEau:u,contour:_}},[n,r,i,p,o,s,c,f]);return(0,U.useEffect)(()=>{Lt&&(zt.composer=h)},[h]),(0,U.useEffect)(()=>{let e=n.getPixelRatio();h.setPixelRatio(e),h.setSize(a.width,a.height),g?.setSize(a.width*e*l,a.height*e*l),_.uniforms.uAspect.value=a.width/Math.max(1,a.height)},[h,g,_,n,a,l]),(0,U.useEffect)(()=>{q.uLineaire.value=1;let e=To(n);return()=>{if(q.uLineaire.value=0,e(),Nt(`liberation`))for(let e of h.passes)e!==v&&e!==x&&e.dispose?.();h.dispose(),v.dispose(),x.dispose()}},[h,v,x,n]),I((e,t)=>{let r=n.getPixelRatio();v.alterne=u,v.tailleMini=d?V.eau.refletTailleMini:0,b&&Ya(b,i),x.preparer(t),y&&Wa(y,i,m,a.width*r,a.height*r,t),h.renderTarget1.width!==Math.floor(a.width*r)&&(h.setPixelRatio(r),h.setSize(a.width,a.height),g?.setSize(a.width*r*l,a.height*r*l)),n.info.autoReset=!1,n.info.reset(),h.render()},1),null}function ko(){let e=R(e=>e.gl);return(0,U.useEffect)(()=>Wt?void 0:To(e),[e]),null}function X({id:e,children:t}){let n=(0,U.useRef)(null),r=z(t=>t.selected===e||t.tourStep!==null&&lt(t.pool)[t.tourStep]?.equipment===e),i=z(t=>t.hovered===e),a=z(e=>e.qualite3d===`basse`)||Wt;return(0,U.useEffect)(()=>n.current?po(e,n.current):void 0,[e]),(0,U.useEffect)(()=>{n.current?.traverse(e=>{let t=e;if(!t.isMesh)return;let n=Array.isArray(t.material)?t.material:[t.material];for(let e of n)e&&`emissive`in e&&!e.userData.keepEmissive&&(e.emissive.set(a&&(r||i)?`#e8f6f4`:`#000000`),e.emissiveIntensity=a?r?.14:i?.07:0:0)})},[r,i,a]),(0,K.jsx)(`group`,{ref:n,name:e,onClick:t=>{t.stopPropagation(),bt({tourStep:null}),Tt(e)},onPointerOver:t=>{t.stopPropagation(),bt({hovered:e}),document.body.style.cursor=`pointer`},onPointerOut:()=>{bt({hovered:null}),document.body.style.cursor=``},children:t})}var Ao=.0315,jo=.0375,Mo=.0395,No=.042,Po=.05,Fo=new j(0,1,0),Io=e=>`${Math.round(e.x*1e3)},${Math.round(e.y*1e3)},${Math.round(e.z*1e3)}`;function Lo(e,t,n,r=24){let i=t.clone().sub(e),a=i.length(),o=new Ae(n,n,a,r,1,!0),s=new A().setFromUnitVectors(Fo,i.normalize());return o.applyMatrix4(new L().compose(e.clone().add(t).multiplyScalar(.5),s,new j(1,1,1))),o}function Ro(e,t){let n=e.clone().addScaledVector(t,No),r=[Lo(e,n,Mo)],i=new at(.038,.0022,8,28);return i.applyMatrix4(new L().compose(n,new A().setFromUnitVectors(new j(0,0,1),t),new j(1,1,1))),r.push(i),r}function zo(e,t){let n=[Lo(e.clone().addScaledVector(t,-.021),e.clone().addScaledVector(t,.021),.046,32)],r=new A().setFromUnitVectors(Fo,t);for(let t=0;t<12;t++){let i=t/12*Math.PI*2,a=new j(Math.cos(i)*.047,0,Math.sin(i)*.047).applyQuaternion(r),o=new Ae(.004,.004,.036,6);o.applyMatrix4(new L().compose(e.clone().add(a),r,new j(1,1,1))),n.push(o)}return n}function Bo(e,t,n){let r=new at(.035500000000000004,.004,8,28);return r.applyMatrix4(new L().compose(e,new A().setFromUnitVectors(new j(0,0,1),t),new j(1,1,1))),[r,Lo(new j(e.x,e.y,e.z-Ao-.002),new j(e.x,e.y,n),.009,12)]}function Vo(e,t,n){let r=kt.filter(t=>t.kind!==`internal`&&mt(t.id,e,n)),i=new Map,a=e=>{let t=Io(e);return i.has(t)||i.set(t,{p:e,dirs:[],segs:new Set,fin:0}),i.get(t)};for(let e of r){let t=e.points.map(e=>new j(...e));t.forEach((n,r)=>{let i=a(n);i.segs.add(e.id),(r===0||r===t.length-1)&&i.fin++,r>0&&i.dirs.push(t[r-1].clone().sub(n).normalize()),r<t.length-1&&i.dirs.push(t[r+1].clone().sub(n).normalize())})}let o=new Map,s=[],c=(e,t)=>e.dot(t)<-.999,l=[new j(...yt.pump).add(new j(-.385,.195,0)),new j(...yt.pump).add(new j(-.035,.39,0))],u=e=>Math.abs(e.x-xt.x)<1.06&&Math.abs(e.z-xt.z)<.52&&e.y>0;for(let[e,t]of i){let n=[];for(let e of t.dirs)n.some(t=>t.dot(e)>.999)||n.push(e);if(!(t.p.y<-.05)){if(n.length===1)u(t.p)&&!l.some(e=>e.distanceTo(t.p)<.08)&&s.push(...zo(t.p.clone().addScaledVector(n[0],.05),n[0]));else if(n.length===2&&!c(n[0],n[1])){let r=Math.PI-n[0].angleTo(n[1]),i=Po*Math.tan(r/2);o.set(e,i);let a=t.p.clone().addScaledVector(n[0],i),c=t.p.clone().addScaledVector(n[1],i);s.push(new Se(new ae(a,t.p,c),14,jo,24,!1)),s.push(...Ro(a,n[0]),...Ro(c,n[1]))}else if(n.length===2)t.fin>=2&&s.push(Lo(t.p.clone().addScaledVector(n[0],.045),t.p.clone().addScaledVector(n[1],.045),Mo));else for(let e of n)s.push(Lo(t.p,t.p.clone().addScaledVector(e,.035),jo)),s.push(...Ro(t.p.clone().addScaledVector(e,.035),e))}}let d=[],f=[],p=xt.z-.446;for(let e of r){if(e.id===`cell`&&t)continue;let n=e.points.map(e=>new j(...e));for(let t=0;t<n.length-1;t++){let r=n[t],i=n[t+1],a=i.clone().sub(r),c=a.length();a.normalize();let l=o.get(Io(r))??0,m=o.get(Io(i))??0;if(l+m>c){let e=c/(l+m);l*=e,m*=e}if(c-l-m<.002)continue;let h=r.clone().addScaledVector(a,l),g=i.clone().addScaledVector(a,-m);if(!(h.y<-.6&&g.y<-.6)&&((e.kind===`egout`?f:d).push(Lo(h,g,Ao,28)),Math.abs(r.z-(xt.z-.38))<.02&&Math.abs(i.z-(xt.z-.38))<.02&&u(r)&&u(i)&&Math.abs(a.z)<.01)){let e=c-l-m-.16,t=Math.floor(e/.35);for(let n=0;n<=t&&e>.05;n++){let r=t===0?.5:n/t;s.push(...Bo(h.clone().addScaledVector(a,.08+r*e),a,p))}}}}let m=e=>{if(!e.length)return null;for(let t of e)for(let e of Object.keys(t.attributes))[`position`,`normal`,`uv`].includes(e)||t.deleteAttribute(e);let t=J(e.map(e=>e.index?e.toNonIndexed():e));return e.forEach(e=>e.dispose()),t};return{tubes:m(d),raccords:m(s),egout:m(f)}}var Ho=new Map;function Uo(e,t,n){let r=`${e}-${t}-${n}`;return Ho.has(r)||Ho.set(r,Vo(e,t,n)),Ho.get(r)}var Wo=null;function Go(){let{tubes:e,raccords:t,egout:n}=Uo(z(e=>e.pool.pac),z(e=>e.pool.electrolyseur),z(e=>e.pool.cartouche));return Wo??=_(3,18),(0,K.jsxs)(X,{id:`canalisations`,children:[e&&(0,K.jsx)(`mesh`,{geometry:e,castShadow:!0,receiveShadow:!0,children:(0,K.jsx)(`meshPhysicalMaterial`,{color:`#5a6167`,roughness:.36,clearcoat:.35,clearcoatRoughness:.3,normalMap:Wo,normalScale:[.3,.3]})}),t&&(0,K.jsx)(`mesh`,{geometry:t,castShadow:!0,receiveShadow:!0,children:(0,K.jsx)(`meshPhysicalMaterial`,{color:`#363b41`,roughness:.5,clearcoat:.15,clearcoatRoughness:.45,normalMap:_(3,3),normalScale:[.45,.45]})}),n&&(0,K.jsx)(`mesh`,{geometry:n,castShadow:!0,receiveShadow:!0,children:(0,K.jsx)(`meshStandardMaterial`,{color:`#6d7176`,roughness:.58,normalMap:_(3,18),normalScale:[.3,.3]})})]})}var Ko=V.flux,qo=typeof matchMedia<`u`&&matchMedia(`(prefers-reduced-motion: reduce)`).matches,Jo=.0345,Yo=.045,Xo=.022,Zo=new j(0,1,0),Qo=e=>e.toFixed(4);function $o(e,t){let n=[];for(let r of t?[...e].reverse():e){let e=new j(...r);(!n.length||n[n.length-1].distanceTo(e)>1e-4)&&n.push(e)}let r=[0],i=[];for(let e=1;e<n.length;e++)r.push(r[e-1]+n[e].distanceTo(n[e-1])),i.push(new A().setFromUnitVectors(Zo,n[e].clone().sub(n[e-1]).normalize()));return{pts:n,cumul:r,sens:i,len:r[r.length-1]}}function es(e){let t=[],n=new j;for(let r of e)for(let e=1;e<r.pts.length;e++){let i=r.cumul[e]-r.cumul[e-1],a=e===1?0:Yo,o=e===r.pts.length-1?0:Yo;if(i-a-o<.02)continue;let s=new Ae(Jo,Jo,i-a-o,16,1,!0);s.translate(0,(a+i-o)/2,0);let c=s.attributes.position,l=new Float32Array(c.count),u=new Float32Array(c.count*3),d=new Float32Array(c.count*3);n.copy(Zo).applyQuaternion(r.sens[e-1]);for(let t=0;t<c.count;t++)l[t]=r.cumul[e-1]+c.getY(t),u.set([r.couleur.r,r.couleur.g,r.couleur.b],t*3),d.set([n.x,n.y,n.z],t*3);s.setAttribute(`aFlux`,new k(l,1)),s.setAttribute(`aAxe`,new k(d,3)),s.setAttribute(`color`,new k(u,3)),s.deleteAttribute(`uv`),s.applyQuaternion(r.sens[e-1]),s.translate(r.pts[e-1].x,r.pts[e-1].y,r.pts[e-1].z),t.push(s)}if(!t.length)return null;let r=J(t);return t.forEach(e=>e.dispose()),r}var ts={value:0};function ns(e){e.uniforms.uPhase=ts,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute float aFlux;
attribute vec3 aAxe;
varying float vFlux;
varying vec3 vFluxN;
varying vec3 vFluxAxe;
varying vec3 vFluxP;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vFlux = aFlux;
vFluxN = normalMatrix * normal;
vFluxAxe = normalMatrix * aAxe;
vFluxP = (modelViewMatrix * vec4(position, 1.0)).xyz;`).replace(`#include <project_vertex>`,`#include <project_vertex>\nvec4 fluxDevant = projectionMatrix * (mvPosition + vec4(0.0, 0.0, ${Qo(Xo)}, 0.0));\ngl_Position.z = fluxDevant.z / fluxDevant.w * gl_Position.w;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
uniform float uPhase;
varying float vFlux;
varying vec3 vFluxN;
varying vec3 vFluxAxe;
varying vec3 vFluxP;`).replace(`#include <color_fragment>`,`#include <color_fragment>
      vec3 fluxVue = normalize(-vFluxP);
      vec3 fluxCote = cross(normalize(vFluxAxe), fluxVue);
      float travers = abs(dot(normalize(vFluxN), fluxCote / max(length(fluxCote), 1e-4)));
      float g = (vFlux + ${Qo(Ko.pointe)} * travers) / ${Qo(Ko.ecart)} - uPhase;
      float f = fract(g);
      float l = fwidth(g) * 1.2;
      float chevron = smoothstep(0.0, l, f) * (1.0 - smoothstep(${Qo(Ko.largeur)}, ${Qo(Ko.largeur)} + l, f));
      chevron = mix(${Qo(Ko.largeur)}, chevron, 1.0 - smoothstep(0.3, 0.75, l));
      vec3 teinte = diffuseColor.rgb * ${Qo(Ko.teinteClarte)};
      vec3 clair = mix(diffuseColor.rgb, vec3(1.0), ${Qo(Ko.blanc)}) * ${Qo(Ko.eclat)};
      diffuseColor.rgb = mix(teinte, clair, chevron);
      diffuseColor.a *= mix(${Qo(Ko.teinte)}, 1.0, chevron);`)}function rs({flows:e}){let t=(0,U.useMemo)(()=>es(e.filter(e=>jt[e.seg].kind!==`internal`).map(e=>({...$o(pt(e),!!e.reverse),couleur:new P(ht[e.state])})).filter(e=>e.len>.05)),[e]);return(0,U.useEffect)(()=>()=>t?.dispose(),[t]),I(({clock:e})=>{ts.value=qo?0:e.elapsedTime*Ko.vitesse/Ko.ecart%1}),t?(0,K.jsx)(`mesh`,{geometry:t,raycast:()=>{},frustumCulled:!1,children:(0,K.jsx)(`meshBasicMaterial`,{vertexColors:!0,transparent:!0,depthWrite:!1,toneMapped:!1,onBeforeCompile:ns,customProgramCacheKey:()=>`flux-eau`})}):null}var is=.9;function as(e){let t=new Xe;for(let n=0;n<e.length-1;n++)t.add(new De(new j(...e[n]),new j(...e[n+1])));return t}var os=.06;function ss(){return z(e=>e.xray)?(0,K.jsx)(us,{}):(0,K.jsx)(Go,{})}var cs=new Map;function ls(e,t=!1){let n=`${e}-${t}`;return cs.has(n)||cs.set(n,kt.filter(n=>n.kind!==`internal`&&mt(n.id,e,t)).map(e=>{let t=as(e.points),n=t.getLength();return{id:e.id,kind:e.kind,geometry:new Se(t,Math.max(8,Math.ceil(n*20)),os,14,!1),elbows:e.points.slice(1,-1)}})),cs.get(n)}function us(){let e=z(e=>e.pool.pac),t=z(e=>e.pool),n=z(e=>e.etape),r=(0,U.useMemo)(()=>n===null?null:new Set(b(t)[n]?.segments??[]),[n,t]),i=ls(e,t.cartouche);return(0,K.jsx)(X,{id:`canalisations`,children:i.map(e=>(0,K.jsxs)(`group`,{children:[(0,K.jsx)(`mesh`,{geometry:e.geometry,castShadow:!1,receiveShadow:!0,children:(0,K.jsx)(`meshStandardMaterial`,{color:_t[e.kind],transparent:!0,opacity:r?r.has(e.id)?.85:.12:.45,emissive:_t[e.kind],emissiveIntensity:r?.has(e.id)?.5:0,depthWrite:!1,roughness:.3,userData:{keepEmissive:!0}},`x`)}),e.elbows.map((t,n)=>(0,K.jsxs)(`mesh`,{position:t,castShadow:!1,children:[(0,K.jsx)(`sphereGeometry`,{args:[os*1.25,16,12]}),(0,K.jsx)(`meshStandardMaterial`,{color:_t[e.kind],transparent:!0,opacity:r?r.has(e.id)?.9:.12:.6,depthWrite:!1,roughness:.3},`x`)]},n))]},e.id))})}var ds=new ye;function fs(){let e=z(e=>e.valve),t=z(e=>e.xray),n=z(e=>e.sensEau),r=z(e=>e.pumpOn),i=z(e=>e.pool.pac),a=z(e=>e.bypass),o=z(e=>e.pool.cartouche),s=z(e=>{let t=un[e.materiel.electrolyseur??``];return!!t&&(t.bulles===null||!!t.bulles&&t.bulles.dy!==0)}),c=(0,U.useMemo)(()=>gt(e,r,i,a,o).filter(e=>!(s&&e.seg===`cell`)),[e,r,i,a,s,o]);return t?(0,K.jsx)(ps,{flows:c}):n?(0,K.jsx)(rs,{flows:c}):null}function ps({flows:e}){let t=(0,U.useRef)(null),n=(0,U.useMemo)(()=>e.map(e=>{let t=as(pt(e)),n=t.getLength();return{path:t,len:n,n:Math.max(3,Math.round(n*5)),reverse:!!e.reverse,color:new P(ht[e.state])}}),[e]),r=n.reduce((e,t)=>e+t.n,0);(0,U.useLayoutEffect)(()=>{let e=t.current;if(!e)return;let r=0;for(let t of n)for(let n=0;n<t.n;n++)e.setColorAt(r++,t.color);e.instanceColor&&(e.instanceColor.needsUpdate=!0)},[n]);let i=(0,U.useMemo)(()=>new j,[]);return I(({clock:e})=>{let r=t.current;if(!r)return;let a=e.elapsedTime,o=0;for(let e of n)for(let t=0;t<e.n;t++){let n=(a*is/e.len+t/e.n)%1;e.path.getPointAt(e.reverse?1-n:n,i),ds.position.copy(i),ds.updateMatrix(),r.setMatrixAt(o++,ds.matrix)}r.instanceMatrix.needsUpdate=!0}),r===0?null:(0,K.jsxs)(`instancedMesh`,{ref:t,args:[void 0,void 0,r],frustumCulled:!1,children:[(0,K.jsx)(`sphereGeometry`,{args:[.045,8,6]}),(0,K.jsx)(`meshBasicMaterial`,{toneMapped:!1})]},r)}var ms=40;function hs(){let e=z(e=>wt(e.valve,e.pumpOn,e.bypass)),t=z(e=>e.pool.electrolyseur),n=z(e=>{let t=un[e.materiel.electrolyseur??``];return t&&t.bulles!==void 0?t.bulles:`tuyau`}),r=(0,U.useRef)(null);return I(({clock:e})=>{let t=e.elapsedTime;if(r.current){for(let e=0;e<ms;e++){let i=(t*.45+e/ms)%1,[a,o]=yt.cell;if(n&&n!==`tuyau`){let t=(a[0]+o[0])/2+n.x0+e*.618%1*(n.x1-n.x0-.08);ds.position.set(t+i*.08,a[1]+n.dy-.02+i*.035,a[2]+(e*.37%1-.5)*.035)}else{let t=a[0]+.07+e*.618%1*(o[0]-a[0]-.14);ds.position.set(t+i*.12,a[1]-.025+i*.045,a[2]+(e*.37%1-.5)*.04)}ds.scale.setScalar(.5+e*.53%1*.8),ds.updateMatrix(),r.current.setMatrixAt(e,ds.matrix)}r.current.instanceMatrix.needsUpdate=!0}}),!e||n===null?null:(0,K.jsx)(K.Fragment,{children:(0,K.jsxs)(`instancedMesh`,{ref:r,visible:t,args:[void 0,void 0,ms],frustumCulled:!1,children:[(0,K.jsx)(`sphereGeometry`,{args:[.0026,6,5]}),(0,K.jsx)(`meshStandardMaterial`,{color:`#ffffff`,transparent:!0,opacity:.7,roughness:.05})]})})}var gs={x0:-7,x1:1,z0:-2,z1:2,depth:1.5},_s={x:0,y:-.5},vs=.025,ys=1,bs=-.5,xs=[bs,-.75,-1,-1.25],Ss=ys/xs.length,Cs=.75;function ws(){return(0,K.jsx)(`meshPhysicalMaterial`,{color:`#8fc6ea`,roughness:.32,clearcoat:.7,clearcoatRoughness:.12,side:2,onBeforeCompile:Dr,customProgramCacheKey:()=>`caustiques`})}function Ts(){let{x0:e,x1:t,z0:n,z1:r,depth:i}=gs,o=t-e,s=r-n,c=(e+t)/2,l=.06,u=i+vs,d=(vs-i)/2;return(0,K.jsxs)(X,{id:`bassin`,children:[(0,K.jsxs)(`mesh`,{position:[c,-i,0],rotation:[-Math.PI/2,0,0],receiveShadow:!0,children:[(0,K.jsx)(`planeGeometry`,{args:[o,s]}),(0,K.jsx)(ws,{})]}),[[[c,d,n],[0,0,0],o],[[c,d,r],[0,Math.PI,0],o],[[e,d,0],[0,Math.PI/2,0],s],[[t,d,0],[0,-Math.PI/2,0],s]].map(([e,t,n],r)=>(0,K.jsxs)(`mesh`,{position:e,rotation:t,receiveShadow:!0,children:[(0,K.jsx)(`planeGeometry`,{args:[n,u]}),(0,K.jsx)(ws,{})]},r)),(0,K.jsx)(a,{args:[ys,i+bs+l,s-Cs+l],radius:l,position:[t-ys/2+l/2,(-i+bs)/2,n+(s-Cs)/2-l/2],receiveShadow:!0,castShadow:!0,children:(0,K.jsx)(ws,{})}),xs.map((e,n)=>{let o=i+e+l,s=t-Ss*(n+.5)+l/2;return(0,K.jsx)(a,{args:[Ss+l,o,.81],radius:l/2,position:[s,-i+o/2-l,r-Cs/2+l/2],receiveShadow:!0,castShadow:!0,children:(0,K.jsx)(ws,{})},n)})]})}var Es=new Set([`porte_gauche`,`porte_droite`,`couvercle`,`poignee`,`poignee_vanne`,`aiguille`,`voyant`,`ecran`,`helice`,`turbine`,`rotor`,`rotor_ph`,`bobine`,`tablier`,`boitier_mural`,`couvercle_prefiltre`,`joint_couvercle`,`panier`]),Ds=e=>e?.getHexString()??`-`;function Os(e){let t=e;return[e.type,Ds(t.color),t.roughness,t.metalness,Ds(t.emissive),t.emissiveIntensity,t.map?.uuid,t.normalMap?.uuid,t.normalScale?.x,t.roughnessMap?.uuid,t.aoMap?.uuid,t.alphaMap?.uuid,e.transparent,e.opacity,e.side,e.vertexColors,e.alphaTest,t.clearcoat,t.transmission,t.sheen,t.envMapIntensity,t.flatShading,e.userData.keepEmissive].join(`|`)}var ks=e=>Object.keys(e.attributes).sort().map(t=>`${t}:${e.attributes[t].itemSize}`).join(`,`)+(e.index?`+i`:``);function As(e){let t=new N;for(let[n,r]of Object.entries(e.attributes)){let e=r.itemSize,i=new Float32Array(r.count*e);for(let t=0;t<r.count;t++)for(let n=0;n<e;n++)i[t*e+n]=r.getComponent(t,n);t.setAttribute(n,new k(i,e))}e.index&&t.setIndex(Array.from(e.index.array));for(let n of e.groups)t.addGroup(n.start,n.count,n.materialIndex);return t}var js=new Map;function Ms(e,t){e.updateMatrixWorld(!0);let n=new Map;e.traverse(t=>{let r=t;if(!r.isMesh||Array.isArray(r.material)||Es.has(r.name)||r.morphTargetInfluences||r.matrixWorld.determinant()<0)return;let i=e;for(let t=r.parent;t&&t!==e;t=t.parent)if(Es.has(t.name)){i=t;break}let a=`${i.uuid}#${Os(r.material)}#${ks(r.geometry)}#${r.castShadow}${r.receiveShadow}#${r.renderOrder}`,o=n.get(a)??{ancre:i,morceaux:[]};o.morceaux.push(r),n.set(a,o)});let r=[...n.values()].filter(e=>e.morceaux.length>=2),i=()=>{let e=new L,t=new L;return r.map(({ancre:n,morceaux:r})=>{e.copy(n.matrixWorld).invert();let i=r.map(n=>As(n.geometry).applyMatrix4(t.multiplyMatrices(e,n.matrixWorld))),a=J(i,!1);return i.forEach(e=>e.dispose()),a})},a;t?js.has(t)?a=js.get(t).map(e=>e?.clone()??null):(a=Br(`fusion:${t}`,i),a.length!==r.length&&(a=i()),js.set(t,a.map(e=>e?.clone()??null))):a=i();let o=[];return r.forEach(({ancre:e,morceaux:t},n)=>{let r=a[n];if(!r)return;r.computeBoundingSphere(),r.computeBoundingBox();let i=new je(r,t[0].material);i.name=`fusion`,i.castShadow=t[0].castShadow,i.receiveShadow=t[0].receiveShadow,i.renderOrder=t[0].renderOrder,e.add(i),t.forEach(e=>e.removeFromParent()),o.push(r)}),o}function Z({url:e,shadows:t=!0,relief:n=1,...r}){let{scene:i}=u(e),{clone:a,fusions:o}=(0,U.useMemo)(()=>{let r=i.clone(!0);return r.traverse(e=>{if(e instanceof je){e.material=Array.isArray(e.material)?e.material.map(e=>e.clone()):e.material.clone();for(let t of[e.material].flat()){let n=t.aoMap;n&&n.channel>0&&!e.geometry.attributes[`uv${n.channel}`]&&(t.aoMap=n.clone(),t.aoMap.channel=+!!e.geometry.attributes.uv1);let r=t;r.transmission>0&&(r.opacity=1-.9*r.transmission,r.transparent=!0,r.transmission=0)}e.castShadow=t,e.receiveShadow=!0}}),n!==1&&h(r,n),Qr(r),p(r),{clone:r,fusions:Ms(r,`${e}|${n}|${t}`)}},[i,n,t,e]);return(0,U.useEffect)(()=>(ea(600),()=>o.forEach(e=>e.dispose())),[o]),(0,K.jsx)(`group`,{...r,children:(0,K.jsx)(`primitive`,{object:a})})}function Ns(e,t,n,r,i=V.matieres.chanfrein){let[a,o,s,c]=e,l=new E([new F(a,-s),new F(o,-s),new F(o,-c),new F(a,-c)]);if(t){let[e,n,r,i]=t;l.holes.push(new pe([new F(e,-r),new F(e,-i),new F(n,-i),new F(n,-r)]))}let u=Math.min(i,(r-n)/3),d=new D(l,{depth:r-n-2*u,bevelEnabled:u>0,bevelThickness:u,bevelSize:u,bevelOffset:-u,bevelSegments:2,curveSegments:1});d.rotateX(-Math.PI/2),d.translate(0,n+u,0);let f=d.attributes.position,p=d.attributes.normal,m=d.attributes.uv;for(let e=0;e<f.count;e++){let t=f.getX(e),n=f.getY(e),r=f.getZ(e),i=Math.abs(p.getY(e))>.5;m.setXY(e,...i?[t,r]:Math.abs(p.getX(e))>Math.abs(p.getZ(e))?[r,n]:[t,n])}return d}var{x:Ps,z:Fs}=xt,Is=.04,Ls=V.local.lampe,Rs=typeof matchMedia<`u`&&matchMedia(`(prefers-reduced-motion: reduce)`).matches;function zs(){let{scene:e}=u(`/agr-piscine-confidentialite/demo-3d/models/abri-keter.glb`),t=z(e=>e.view),n=z(e=>e.selected),r=z(e=>e.xray),i=z(e=>e.tourStep!==null&&bc.has(lt(e.pool)[e.tourStep]?.equipment??``)),a=t!==`piscine`||r||i||!!n&&bc.has(n),{root:o,lid:s,left:c,right:l}=(0,U.useMemo)(()=>{let t=e.clone(!0);return t.traverse(e=>{e.castShadow=!0,e.receiveShadow=!0}),h(t,5),p(t),Ms(t),{root:t,lid:t.getObjectByName(`couvercle`),left:t.getObjectByName(`porte_gauche`),right:t.getObjectByName(`porte_droite`)}},[e]),d=(0,U.useRef)([]),f=(0,U.useRef)(null),m=(0,U.useMemo)(()=>{let e=new ye;return e.position.set(0,.45,-.15),e},[]);return I((e,t)=>{let n=Rs?1:Math.min(1,t*3);s&&(s.rotation.x=Oe.lerp(s.rotation.x,a?-1.62:0,n)),c&&(c.rotation.y=Oe.lerp(c.rotation.y,a?-1.9:0,n)),l&&(l.rotation.y=Oe.lerp(l.rotation.y,a?1.9:0,n)),f.current&&(f.current.intensity=(s?Math.min(1,-s.rotation.x/1.62):0)*Oe.lerp(Ls.jour,Ls.nuit,G.nuit)),s&&d.current.forEach((e,t)=>{if(!e)return;let n=t===0?-1:1,r=Bs.clone().setX(n*Bs.x),i=Vs.clone().setX(n*Vs.x).applyAxisAngle(Hs,s.rotation.x).add(s.position).clone().sub(r);e.position.copy(r),e.quaternion.setFromUnitVectors(Us,i.clone().normalize()),e.scale.set(1,i.length(),1)})}),(0,K.jsxs)(`group`,{position:[Ps,Is,Fs],onClick:e=>e.stopPropagation(),children:[(0,K.jsx)(`primitive`,{object:o}),H&&(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(`primitive`,{object:m}),(0,K.jsx)(`spotLight`,{ref:f,position:[-.45,2,1.25],target:m,color:Ls.couleur,angle:Ls.faisceau*Math.PI/180,penumbra:.5,distance:Ls.portee,decay:2,intensity:0})]}),(0,K.jsxs)(`mesh`,{position:[0,xt.floor+.55-Is,-.452],receiveShadow:!0,children:[(0,K.jsx)(`boxGeometry`,{args:[1.92,.95,.012]}),(0,K.jsx)(`meshStandardMaterial`,{color:`#17181a`,roughness:.78,normalMap:_(24,12),normalScale:[.22,.22]})]}),[-.75,0,.75].map(e=>(0,K.jsxs)(`group`,{position:[e,1.215,-.515],children:[(0,K.jsxs)(`mesh`,{children:[(0,K.jsx)(`boxGeometry`,{args:[.16,.055,.035]}),(0,K.jsx)(`meshStandardMaterial`,{color:`#1d1e20`,roughness:.55})]}),(0,K.jsxs)(`mesh`,{position:[0,.025,0],rotation:[0,0,Math.PI/2],children:[(0,K.jsx)(`cylinderGeometry`,{args:[.014,.014,.17,12]}),(0,K.jsx)(`meshStandardMaterial`,{color:`#5d6064`,roughness:.45,metalness:1})]})]},e)),[0,1].map(e=>(0,K.jsx)(`group`,{ref:t=>void(d.current[e]=t),children:(0,K.jsxs)(`mesh`,{position:[0,.5,0],children:[(0,K.jsx)(`cylinderGeometry`,{args:[.006,.006,1,8]}),(0,K.jsx)(`meshStandardMaterial`,{color:`#c9ccd0`,metalness:.9,roughness:.25})]})},e)),[0,1].map(e=>(0,K.jsx)(Ws,{sx:e===0?-1:1,lid:s},e))]})}var Bs=new j(.98,.82,-.37),Vs=new j(.98,-.045,.22),Hs=new j(1,0,0),Us=new j(0,1,0);function Ws({sx:e,lid:t}){let n=(0,U.useRef)(null);return I(()=>{if(!n.current||!t)return;let r=Bs.clone().setX(e*Bs.x),i=Vs.clone().setX(e*Vs.x).applyAxisAngle(Hs,t.rotation.x).add(t.position);n.current.position.copy(r),n.current.quaternion.setFromUnitVectors(Us,i.sub(r).normalize())}),(0,K.jsx)(`group`,{ref:n,children:(0,K.jsxs)(`mesh`,{position:[0,.16,0],children:[(0,K.jsx)(`cylinderGeometry`,{args:[.012,.012,.32,10]}),(0,K.jsx)(`meshStandardMaterial`,{color:`#17181a`,roughness:.5})]})})}function Gs(){let e=Jr(`dalle`),t=(0,U.useMemo)(()=>{let[e,t]=[Ps-.7,Fs];return Ns([e-1.775,e+1.775,t-.675,t+.675],null,0,Is)},[]);return(0,K.jsx)(`mesh`,{geometry:t,receiveShadow:!0,onClick:e=>e.stopPropagation(),children:(0,K.jsx)(`meshStandardMaterial`,{...e,...Yr(`dalle`)})})}var Ks=e=>Math.atan2(Math.sin(e),Math.cos(e));function qs(){let e=z(e=>e.valve),t=z(e=>e.screen===`vanne`),n=At.find(t=>t.id===e).angle,r=(0,U.useRef)(null),i=R(e=>e.camera),a=R(e=>e.gl),o=R(e=>e.controls),s=(0,U.useRef)(null),c=(0,U.useMemo)(()=>({plan:new w(new j(0,1,0)),rayon:new Ze,ndc:new F,pivot:new j,point:new j}),[]);I((e,t)=>{let i=r.current?.getObjectByName(`poignee_vanne`);i&&!s.current&&(i.rotation.y+=Ks(n-i.rotation.y)*Math.min(1,t*6))});let l=(e,t,n)=>{let r=a.domElement.getBoundingClientRect();return c.ndc.set((t-r.left)/r.width*2-1,-((n-r.top)/r.height)*2+1),c.rayon.setFromCamera(c.ndc,i),e.getWorldPosition(c.pivot),c.plan.constant=-c.pivot.y,c.rayon.ray.intersectPlane(c.plan,c.point)?Math.atan2(-(c.point.z-c.pivot.z),c.point.x-c.pivot.x):null};return(0,U.useEffect)(()=>()=>void(document.body.style.cursor=``),[]),(0,K.jsx)(X,{id:`vanne6`,children:(0,K.jsx)(`group`,{ref:r,onPointerDown:e=>{let n=r.current?.getObjectByName(`poignee_vanne`);if(!t||!n)return;e.stopPropagation();let i=l(n,e.nativeEvent.clientX,e.nativeEvent.clientY);if(i===null)return;s.current={angle0:n.rotation.y,souris0:i},o&&(o.enabled=!1),document.body.style.cursor=`grabbing`;let a=e=>{let t=l(n,e.clientX,e.clientY);t!==null&&s.current&&(n.rotation.y=s.current.angle0+Ks(t-s.current.souris0))},c=()=>{window.removeEventListener(`pointermove`,a),window.removeEventListener(`pointerup`,c),window.removeEventListener(`pointercancel`,c),s.current=null,o&&(o.enabled=!0),document.body.style.cursor=``;let e=At.reduce((e,t)=>Math.abs(Ks(t.angle-n.rotation.y))<Math.abs(Ks(e.angle-n.rotation.y))?t:e);Et.choisir?.(e.id)};window.addEventListener(`pointermove`,a),window.addEventListener(`pointerup`,c),window.addEventListener(`pointercancel`,c)},onClick:e=>t&&e.stopPropagation(),onPointerOver:()=>t&&(document.body.style.cursor=`grab`),onPointerOut:()=>t&&!s.current&&(document.body.style.cursor=``),children:(0,K.jsx)(Z,{relief:5,url:`/agr-piscine-confidentialite/demo-3d/models/vanne6.glb`,position:yt.filter})})})}function Js(e,t,n=1.2){e?.traverse(e=>{if(!(e instanceof je))return;let r=e.material;r.userData.keepEmissive=!0,r.emissive.set(t??`#000000`),r.emissiveIntensity=t?n:0})}function Ys(){let e=z(e=>e.pumpOn),t=z(e=>fn[e.materiel.coffret??``]??`/agr-piscine-confidentialite/demo-3d/models/coffret.glb`),n=(0,U.useRef)(null);return I(()=>Js(n.current?.getObjectByName(`voyant`),e?`#3ddc84`:null)),(0,K.jsx)(X,{id:`coffret`,children:(0,K.jsx)(`group`,{ref:n,children:(0,K.jsx)(Z,{relief:5,url:t,position:yt.coffret},t)})})}var Xs=[Ps-1.005,xt.floor+.88,Fs-.12];function Zs({origine:e}){let t=(0,U.useMemo)(()=>{let[t,n,r]=Xs,[i,a,o]=e,s=[[t+.05,n-.2,r],[t+.06,xt.floor+.58,r-.1],[t+.08,xt.floor+.58,Fs-.455],[i+.24,xt.floor+.58,Fs-.455],[i+.27,a+.1,o-.03]].map(([e,t,n])=>new j(e,t,n));return new ce(s,!1,`centripetal`)},[e]);return(0,K.jsxs)(`mesh`,{castShadow:!0,children:[(0,K.jsx)(`tubeGeometry`,{args:[t,60,.0045,6,!1]}),(0,K.jsx)(`meshStandardMaterial`,{color:`#141518`,roughness:.6})]})}function Qs(){let e=z(e=>wt(e.valve,e.pumpOn,e.bypass)),t=(0,U.useRef)(null),n=z(e=>e.materiel.electrolyseur??``),r=un[n],[,i,a]=yt.cell[0],o=[yt.electrolyser[0],i,a-.09];return I((n,i)=>{let a=t.current;if(!a)return;Js(a.getObjectByName(`voyant`),e?`#3ddc84`:null);let s=e?a.getObjectByName(`rotor_ph`):null;s&&(s.rotation.x-=i*1.2);let c=r?.boitierMural?a.getObjectByName(`boitier_mural`):null;c&&!c.userData.pose&&(c.position.set(Xs[0]-o[0],Xs[1]-o[1],Xs[2]-o[2]),c.rotation.set(0,Math.PI/2,0),c.userData.pose=!0)}),(0,K.jsxs)(X,{id:`electrolyseur`,children:[(0,K.jsx)(`group`,{ref:t,children:r?(0,K.jsx)(Z,{relief:5,url:r.url,position:o},r.url):(0,K.jsx)(Z,{relief:5,url:`/agr-piscine-confidentialite/demo-3d/models/electrolyseur.glb`,position:yt.electrolyser})}),r?.boitierMural&&(0,K.jsx)(Zs,{origine:o}),n===`fusion-sel-pro`&&(0,K.jsx)(uc,{origine:o})]})}var $s={"fusion-pump-pro":`/agr-piscine-confidentialite/demo-3d/models/pompe.glb`,"fusion-pump-silen-s-pro":`/agr-piscine-confidentialite/demo-3d/models/pompe-silen.glb`,"fusion-pump-vs-pro":`/agr-piscine-confidentialite/demo-3d/models/pompe-vs.glb`,"fusion-pump-ecomax-expert-la-pompe-a-vitesse-variable":`/agr-piscine-confidentialite/demo-3d/models/pompe-ecomax.glb`,"fusion-pro-pump-poolstar":`/agr-piscine-confidentialite/demo-3d/models/pompe-fusion-pro-poolstar.glb`},ec=[`couvercle_prefiltre`,`joint_couvercle`,`panier`],tc=(e,t,n)=>Oe.smoothstep(n,e,t);function nc(){let e=z(e=>e.pumpOn),t=z(e=>$s[e.materiel.pompe??``]??`/agr-piscine-confidentialite/demo-3d/models/pompe.glb`),n=z(e=>e.prefiltreOuvert&&!e.pumpOn&&e.selected===`pompe`),{animations:r}=u(t),i=(0,U.useRef)(null),a=(0,U.useRef)(0),o=(0,U.useMemo)(()=>{let e={};for(let t of r.find(e=>e.name===`eclate`)?.tracks??[]){let[n,r]=t.name.split(`.`);if(!ec.includes(n))continue;let i=t.values.length;r===`position`&&(e[n]={...e[n],p:new j().fromArray(t.values,i-3)}),r===`quaternion`&&(e[n]={...e[n],q:new A().fromArray(t.values,i-4)})}return e},[r]),s=(0,U.useRef)({});(0,U.useEffect)(()=>void(s.current={}),[t]);let c=(0,U.useRef)(0),l=(0,U.useMemo)(()=>({q:new A,axe:new j(0,1,0)}),[]);return I((t,r)=>{let u=i.current?.getObjectByName(`turbine`);if(!u)return;a.current+=((e?40:0)-a.current)*Math.min(1,r*1.5),u.rotation.x+=a.current*r;let d=+!!n;if(c.current!==d||d!==0||Object.keys(s.current).length){c.current+=Math.sign(d-c.current)*Math.min(Math.abs(d-c.current),r*.7);for(let e of ec){let t=i.current?.getObjectByName(e),n=o[e];if(!t||!n)continue;let r=s.current[e]??={o:t,p:t.position.clone(),q:t.quaternion.clone()},a=e===`panier`?tc(.55,1,c.current):tc(.25,.8,c.current)*.32;t.position.lerpVectors(r.p,n.p??r.p,a),t.quaternion.slerpQuaternions(r.q,n.q??r.q,a),e===`couvercle_prefiltre`&&t.quaternion.premultiply(l.q.setFromAxisAngle(l.axe,-(Math.PI/2)*tc(0,.3,c.current)))}}}),(0,K.jsx)(X,{id:`pompe`,children:(0,K.jsx)(`group`,{ref:i,children:(0,K.jsx)(Z,{relief:5,url:t,position:yt.pump},t)})})}function rc(){let e=z(e=>e.pumpOn),t=z(e=>e.pool.cartouche?`/agr-piscine-confidentialite/demo-3d/models/filtre-thinclear.glb`:e.materiel.filtre===`filtre-fusion-expert`?`/agr-piscine-confidentialite/demo-3d/models/filtre-expert.glb`:`/agr-piscine-confidentialite/demo-3d/models/filtre.glb`),n=(0,U.useRef)(null),r=(0,U.useRef)(null);return I((t,i)=>{let a=n.current?.getObjectByName(`aiguille`);if(!a)return;r.current===null&&(r.current=a.rotation.z);let o=r.current-(e?1.6:0);a.rotation.z+=(o-a.rotation.z)*Math.min(1,i*3)}),(0,K.jsx)(X,{id:`filtre`,children:(0,K.jsx)(`group`,{ref:n,children:(0,K.jsx)(Z,{relief:5,url:t,position:yt.filter},t)})})}function ic({position:e,vertical:t,ouverte:n}){let r=(0,U.useRef)(null);return I((e,t)=>{let i=r.current?.getObjectByName(`poignee`);i&&(i.rotation.y+=((n?0:Math.PI/2)-i.rotation.y)*Math.min(1,t*8))}),(0,K.jsx)(`group`,{ref:r,children:(0,K.jsx)(Z,{relief:5,url:`/agr-piscine-confidentialite/demo-3d/models/vanne.glb`,position:e,rotation:t?[0,Math.PI/2,Math.PI/2]:[Math.PI/2,0,0]})})}function ac(){let e=z(e=>e.bypass);return(0,K.jsxs)(X,{id:`bypass`,children:[(0,K.jsx)(ic,{position:yt.bypass.entree,vertical:!0,ouverte:e.entree}),(0,K.jsx)(ic,{position:yt.bypass.milieu,vertical:!1,ouverte:e.milieu}),(0,K.jsx)(ic,{position:yt.bypass.sortie,vertical:!0,ouverte:e.sortie})]})}var oc=new nt(0,0,-Math.PI/2);function sc({position:e,vertical:t=!1,open:n=!0}){return(0,K.jsx)(Z,{url:`/agr-piscine-confidentialite/demo-3d/models/vanne.glb`,position:e,rotation:t?[0,Math.PI/2,Math.PI/2]:[0,n?0:Math.PI/2,0]})}function cc(){let e=z(e=>e.pumpOn&&e.valve===`filtration`),t=z(e=>cn[e.materiel.chauffage??``]??`/agr-piscine-confidentialite/demo-3d/models/pac.glb`),n=(0,U.useRef)(null);return I((t,r)=>{let i=n.current?.getObjectByName(`helice`);i&&e&&(i.rotation.z+=r*8)}),(0,K.jsxs)(X,{id:`pac`,children:[(0,K.jsx)(`group`,{ref:n,children:(0,K.jsx)(Z,{relief:5,url:t,position:yt.heatPump},t)}),(0,K.jsx)(sc,{position:yt.pacValve,open:!1})]})}function lc(){let e=z(e=>wt(e.valve,e.pumpOn,e.bypass)),t=z(e=>e.materiel.regulation),n=(0,U.useRef)(null);I((t,r)=>{let i=n.current;if(i){for(let t of[`rotor`,`rotor2`]){let n=i.getObjectByName(t);n&&e&&(n.rotation.z-=r*3)}Js(i.getObjectByName(`ecran`),e?`#5cc9bf`:null,.9)}});let r=t?dn[t]:void 0;if(r?.flottant)return null;let i=r?.url??`/agr-piscine-confidentialite/demo-3d/models/regulation-ph.glb`,a=r?.bidons??[`ph`],o=r?r.tubes??{}:ln,s=r?r.injections??{}:mn,[c,l,u]=yt.phRegulator,d=[c,l+.02,u+.005],[f,,p]=yt.phTank,m={ph:[f,xt.floor,p],chlore:a.includes(`ph`)?[f-yc,xt.floor,p]:[f,xt.floor,p]};return(0,K.jsxs)(X,{id:`regulation-ph`,children:[(0,K.jsx)(`group`,{ref:n,children:(0,K.jsx)(Z,{relief:5,url:i,position:d})}),a.includes(`ph`)&&(0,K.jsx)(Z,{relief:5,url:`/agr-piscine-confidentialite/demo-3d/models/bidon-ph.glb`,position:m.ph}),a.includes(`chlore`)&&(0,K.jsx)(Z,{relief:5,url:`/agr-piscine-confidentialite/demo-3d/models/bidon-chlore.glb`,position:m.chlore}),a.map(e=>{let t=o[e];return t&&(0,K.jsx)(vc,{depart:[d[0]+t[0],d[1]+t[2],d[2]-t[1]],bidon:m[e]},e)}),a.map((e,t)=>{let n=s[e];return n&&(0,K.jsx)(fc,{position:yt.injections[t],depart:[d[0]+n[0],d[1]+n[2],d[2]-n[1]]},e)})]})}function uc({origine:e}){let t=z(e=>e.pool.regulationPh?e.materiel.regulation:void 0);if(t!==void 0&&(t===null||(dn[t]?.bidons.includes(`ph`)??!0)))return null;let n=yt.phTank;return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(Z,{relief:5,url:`/agr-piscine-confidentialite/demo-3d/models/bidon-ph.glb`,position:[n[0],xt.floor,n[2]]}),(0,K.jsx)(vc,{devant:!0,depart:[e[0]+.213,e[1]-.22,e[2]+.216],bidon:[n[0],xt.floor,n[2]]}),(0,K.jsx)(fc,{position:yt.injections[0],depart:[e[0]+.218,e[1]-.13,e[2]+.168]})]})}var dc=.11;function fc({position:e,depart:t}){let n=(0,U.useMemo)(()=>{let[n,r,i]=t,a=new j(e[0],e[1],e[2]+dc),o=[new j(n,r+.004,i),new j(n,r-.04,i+.01),new j(Math.max(n-.06,a.x+.12),r-.12,Math.max(i+.03,gc)),new j(a.x+.1,.76,Fs-.31),new j(a.x+.06,.74,Fs-.17),new j(a.x+.025,a.y+.035,a.z+.06),new j(a.x,a.y,a.z+.035),new j(a.x,a.y,a.z-.004)];return new Se(new ce(o,!1,`centripetal`),96,.004,8,!1)},[t,e]);return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(Z,{relief:5,url:`/agr-piscine-confidentialite/demo-3d/models/injection.glb`,position:e,rotation:pc}),(0,K.jsx)(`mesh`,{geometry:n,castShadow:!0,children:(0,K.jsx)(`meshStandardMaterial`,{color:`#e6ecef`,roughness:.3,transparent:!0,opacity:.85})})]})}var pc=[0,0,Math.PI/2],mc=[.05,.39,0],hc=Ps+.93,gc=Fs-.37,_c=Fs-.31;function vc({depart:e,bidon:t,devant:n=!1}){let r=(0,U.useMemo)(()=>{let[r,i,a]=e,o=new j(t[0]+mc[0],t[1]+mc[1],t[2]+mc[2]),s=[new j(r,i+.004,a),new j(r,i-.04,a+.01)],c=[new j(o.x,o.y+.07,o.z),new j(o.x,o.y-.004,o.z)],l=n?[new j(r+.05,i-.03,_c),new j(hc-.04,i-.03,_c),new j(hc,.7,Fs-.15),new j(hc,.64,o.z-.12),new j((hc+o.x)/2,.6,o.z-.03)]:[new j(r+.08,i-.11,gc),new j(hc-.02,i-.16,gc),new j(hc,.72,Fs-.25),new j(hc,.64,o.z-.12),new j((hc+o.x)/2,.6,o.z-.03)];return new Se(new ce([...s,...l,...c],!1,`centripetal`),120,.004,8,!1)},[e,t,n]);return(0,K.jsx)(`mesh`,{geometry:r,castShadow:!0,children:(0,K.jsx)(`meshStandardMaterial`,{color:`#e6ecef`,roughness:.3,transparent:!0,opacity:.85})})}var yc=.23,bc=new Set([`vannes`,`pompe`,`filtre`,`vanne6`,`pac`,`bypass`,`electrolyseur`,`regulation-ph`,`coffret`]);function xc(){let e=z(e=>e.pool.pac),t=z(e=>e.pool.electrolyseur),n=z(e=>e.pool.regulationPh),r=z(e=>e.pool.cartouche);return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(Gs,{}),(0,K.jsx)(zs,{}),(0,K.jsx)(X,{id:`vannes`,children:yt.suctionValves.map((e,t)=>(0,K.jsx)(Z,{url:`/agr-piscine-confidentialite/demo-3d/models/vanne.glb`,position:e,rotation:oc},t))}),(0,K.jsx)(nc,{}),(0,K.jsx)(rc,{}),!r&&(0,K.jsx)(qs,{}),(0,K.jsx)(Ys,{}),t&&(0,K.jsx)(Qs,{}),t&&(0,K.jsx)(ac,{}),n&&(0,K.jsx)(lc,{}),e&&(0,K.jsx)(cc,{})]})}for(let e of[`abri-keter`,`filtre`,`vanne6`,`vanne`,`coffret`])g(`/agr-piscine-confidentialite/demo-3d/models/${e}.glb`);var Sc=new j;function Cc(e,t,n,r,i,a){let o=2*Math.PI*i/4,s=Math.max(a-2*i,0),c=Math.PI/4;Sc.copy(t),Sc[r]=0,Sc.normalize();let l=.5*o/(o+s),u=1-Sc.angleTo(e)/c;return Math.sign(Sc[n])===1?u*l:s/(o+s)+l+l*(1-u)}var wc=class e extends xe{constructor(e=1,t=1,n=1,r=2,i=.1){let a=r*2+1;if(i=Math.min(e/2,t/2,n/2,i),super(1,1,1,a,a,a),this.type=`RoundedBoxGeometry`,this.parameters={width:e,height:t,depth:n,segments:r,radius:i},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let s=new j,c=new j,l=new j(e,t,n).divideScalar(2).subScalar(i),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,m=new j,h=.5/a;for(let r=0,a=0;r<u.length;r+=3,a+=2)switch(s.fromArray(u,r),c.copy(s),c.x-=Math.sign(c.x)*h,c.y-=Math.sign(c.y)*h,c.z-=Math.sign(c.z)*h,c.normalize(),u[r+0]=l.x*Math.sign(s.x)+c.x*i,u[r+1]=l.y*Math.sign(s.y)+c.y*i,u[r+2]=l.z*Math.sign(s.z)+c.z*i,d[r+0]=c.x,d[r+1]=c.y,d[r+2]=c.z,Math.floor(r/p)){case 0:m.set(1,0,0),f[a+0]=Cc(m,c,`z`,`y`,i,n),f[a+1]=1-Cc(m,c,`y`,`z`,i,t);break;case 1:m.set(-1,0,0),f[a+0]=1-Cc(m,c,`z`,`y`,i,n),f[a+1]=1-Cc(m,c,`y`,`z`,i,t);break;case 2:m.set(0,1,0),f[a+0]=1-Cc(m,c,`x`,`z`,i,e),f[a+1]=Cc(m,c,`z`,`x`,i,n);break;case 3:m.set(0,-1,0),f[a+0]=1-Cc(m,c,`x`,`z`,i,e),f[a+1]=1-Cc(m,c,`z`,`x`,i,n);break;case 4:m.set(0,0,1),f[a+0]=1-Cc(m,c,`x`,`y`,i,e),f[a+1]=1-Cc(m,c,`y`,`x`,i,t);break;case 5:m.set(0,0,-1),f[a+0]=Cc(m,c,`x`,`y`,i,e),f[a+1]=1-Cc(m,c,`y`,`x`,i,t)}}static fromJSON(t){return new e(t.width,t.height,t.depth,t.segments,t.radius)}};function Tc(e,t,n){let r=document.createElement(`canvas`);r.width=r.height=e,t(r.getContext(`2d`),e);let i=new qe(r);return i.wrapS=i.wrapT=Ke,i.repeat.set(...n),i.colorSpace=it,i.anisotropy=d,i}function Ec(e){return()=>(e=e*16807%2147483647,e/2147483647)}function Dc(e,t,n,r,i,a=1.5){for(let o=0;o<n;o++)e.fillStyle=r[Math.floor(i()*r.length)],e.globalAlpha=.15+i()*.35,e.fillRect(i()*t,i()*t,a+i()*a,a+i()*a);e.globalAlpha=1}var Oc=new Map;function kc(e,t){return Oc.has(e)||Oc.set(e,t()),Oc.get(e)}var Ac=e=>kc(`liner-`+e,()=>Tc(512,(t,n)=>{let r=Ec(e.length*13);if(e===`coque`){let e=t.createLinearGradient(0,0,n,n);e.addColorStop(0,`#eef9fd`),e.addColorStop(1,`#dff2f9`),t.fillStyle=e,t.fillRect(0,0,n,n),Dc(t,n,1500,[`#ffffff`,`#cbe7f1`],r,2);return}let i=e===`liner`?[205,62,52]:[200,55,60],a=n/16;for(let e=0;e<16;e++)for(let n=0;n<16;n++){let o=i[2]+(r()-.5)*14;t.fillStyle=`hsl(${i[0]+(r()-.5)*10}, ${i[1]}%, ${o}%)`,t.fillRect(e*a+1,n*a+1,a-2,a-2)}t.fillStyle=`rgba(255,255,255,0.35)`;for(let e=0;e<=16;e++)t.fillRect(e*a-1,0,2,n),t.fillRect(0,e*a-1,n,2)},[1,1])),jc=()=>kc(`frise`,()=>Tc(256,(e,t)=>{e.fillStyle=`#123e6b`,e.fillRect(0,0,t,t);let n=t/8;for(let r=0;r<8;r++)e.fillStyle=r%2?`#1f5f99`:`#0d2f52`,e.fillRect(r*n+2,2,n-4,t-4)},[1,1])),Mc=.075,Nc=.445,Pc=.25,Fc=.073,Ic=3.98,Lc=mr-Mc+.015,Rc=-.25,zc=.12,Bc=.06,Vc=7,Hc=3,Uc=e=>Math.sqrt(Fc**2+(Pc**2-Fc**2)*(1-e));function Wc(e){let t=new Uint8Array(128);for(let n=0;n<32;n++){let r=n<2;t.set(r?[150,156,162,255]:e?[191,196,200,255]:[233,235,236,255],n*4)}let n=l(new Qe(t,32,1));return n.wrapS=n.wrapT=Ke,n.colorSpace=it,n.needsUpdate=!0,n}var Gc=96,Kc=e=>Math.hypot(Rc+e,Nc-(Lc+zc)),qc=Math.PI/2*zc;function Jc(e,t){let n=Rc,r=Lc+zc,i=Kc(t);if(e<=i)return[-t+(n+t)*e/i,Nc-(Nc-r)*e/i];if(e<=i+qc){let t=(e-i)/zc;return[-.37+zc*Math.cos(t),r-zc*Math.sin(t)]}return[-.37-(e-i-qc),Lc]}function Yc(e,t,n,r,i,a,o,s=0){let c=e.getAttribute(`position`),l=e.getAttribute(`uv`);for(let e=0;e<o;e++){let u=n+(r-n)*e/(o-1),[d,f]=Jc(u,t);for(let t=0;t<2;t++)c.setXYZ(s+e*2+t,d,f+.002*!!s,t?a:i),l.setXY(s+e*2+t,(u-n)/Bc,t)}c.needsUpdate=!0,l.needsUpdate=!0}function Xc(e,t,n,r){Yc(e,t,n,r,-3.98/2,Ic/2,Gc),e.computeVertexNormals(),e.computeBoundingSphere()}var Zc=[-1.45,-.5,.5,1.45],Qc=24;function $c(e,t,n){Zc.forEach((r,i)=>Yc(e,t,0,Math.max(n,.001),r-.025,r+.025,Qc,i*Qc*2)),e.computeVertexNormals(),e.computeBoundingSphere()}function el(e,t){let n=new N;n.setAttribute(`position`,new k(new Float32Array(e*2*3*t),3)),n.setAttribute(`uv`,new k(new Float32Array(e*2*2*t),2));let r=[];for(let n=0;n<t;n++)for(let t=0;t<e-1;t++){let i=n*e*2;r.push(i+t*2,i+t*2+1,i+t*2+2,i+t*2+1,i+t*2+3,i+t*2+2)}return n.setIndex(r),n}var tl=()=>el(Gc,1),nl={"volet-automatique-motorise-octeo":`/agr-piscine-confidentialite/demo-3d/models/volet-octeo.glb`};function rl(){let e=z(e=>nl[e.materiel.volet??``]??`/agr-piscine-confidentialite/demo-3d/models/volet.glb`),{scene:t}=u(e),n=hn(),r=z(e=>e.selected===`volet`||e.tourStep!==null&&lt(e.pool)[e.tourStep]?.equipment===`volet`),{root:i,bobine:a}=(0,U.useMemo)(()=>{let e=t.clone(!0);e.traverse(e=>{e instanceof je&&(e.material=Array.isArray(e.material)?e.material.map(e=>e.clone()):e.material.clone(),e.castShadow=!0,e.receiveShadow=!0)});let n=e.getObjectByName(`tablier`);return n&&(n.visible=!1),h(e,3),p(e),Ms(e),{root:e,bobine:e.getObjectByName(`bobine`)}},[t]),o=(0,U.useMemo)(()=>tl(),[]),c=(0,U.useMemo)(()=>el(Qc,Zc.length),[]),l=(0,U.useRef)(null),d=(0,U.useRef)(null),f=(0,U.useMemo)(()=>Wc(e.includes(`octeo`)),[e]);(0,U.useEffect)(()=>()=>(o.dispose(),c.dispose(),f.dispose()),[o,c,f]);let[m,g]=(0,U.useState)(`ouvert`),_=(0,U.useRef)({d:0,t:0,phase:`ouvert`});(0,U.useEffect)(()=>{if(!r)return;let e=()=>{let e=_.current;e.phase=n?`ferme`:`fermeture`,e.t=0,g(e.phase)};return e(),window.addEventListener(`volet-animer`,e),()=>window.removeEventListener(`volet-animer`,e)},[r,n]);let v=(0,U.useRef)(-1);I((e,t)=>{let i=_.current;if(i.t+=t,i.phase===`fermeture`?(i.d=Math.min(1,i.d+t/Vc),i.d>=1&&(i.phase=`ferme`,i.t=0,g(`ferme`))):i.phase===`ferme`&&!n&&i.t>Hc?(i.phase=`ouverture`,g(`ouverture`)):i.phase===`ouverture`&&(i.d=Math.max(0,i.d-t/Vc),i.d<=0&&(i.phase=`ouvert`,g(`ouvert`))),n&&(i.d=i.phase===`ferme`&&r?1:0),Math.abs(i.d-v.current)<1e-4)return;ea(300),v.current=i.d;let s=i.d*i.d*(3-2*i.d),u=Bm[1]-Bm[0]+.17-.03+Rc-zc,f=s*(Kc(Fc)+qc+u),p=Uc(Math.min(f,u)/u),m=Math.min(f,Kc(p)+qc+u),h=Math.max(0,f-u);a&&(a.scale.set(p/Pc,p/Pc,1),a.position.y=Nc*(1-p/Pc),a.visible=p>.077),l.current&&(l.current.visible=m-h>.002),d.current&&(d.current.visible=h>.002),m-h>.002&&Xc(o,p,h,m),h>.002&&$c(c,p,h);let y=Math.max(h,Kc(p)+qc),b=Bm[0]-.17;m>y+.01?q.uVolet.value.set(b-Jc(y,p)[0]+.01,b-Jc(m,p)[0]-.01):q.uVolet.value.set(1e6,1e6)}),(0,U.useEffect)(()=>()=>void q.uVolet.value.set(1e6,1e6),[]);let y=m===`ferme`||m===`ouverture`;return(0,K.jsxs)(`group`,{position:[Bm[0]-.17,Mc,0],rotation:[0,Math.PI,0],children:[(0,K.jsx)(`primitive`,{object:i}),(0,K.jsx)(`mesh`,{ref:l,geometry:o,castShadow:!0,receiveShadow:!0,visible:!1,children:(0,K.jsx)(`meshPhysicalMaterial`,{map:f,roughness:.32,clearcoat:.3,clearcoatRoughness:.25,side:2})}),(0,K.jsx)(`mesh`,{ref:d,geometry:c,castShadow:!0,visible:!1,children:(0,K.jsx)(`meshStandardMaterial`,{color:`#2b2f35`,roughness:.7,side:2})}),r&&(0,K.jsx)(s,{position:[-3.2,1.1,0],center:!0,zIndexRange:[20,0],style:{pointerEvents:`none`},children:(0,K.jsx)(`div`,{role:`status`,className:`w-56 rounded-moyen px-3 py-2 text-petit shadow-2 ${y?`bg-terre text-white`:`bg-surface text-encre`}`,children:y?(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(`p`,{className:`font-semibold`,children:`⚠ Avant d’ouvrir : déclipsez les sangles`}),(0,K.jsx)(`p`,{className:`mt-0.5`,children:`Déverrouillez les brides de sécurité : c’est l’oubli le plus fréquent.`})]}):m===`fermeture`?(0,K.jsx)(`p`,{className:`font-semibold`,children:`Fermeture de la couverture…`}):(0,K.jsx)(`p`,{className:`font-semibold`,children:`Couverture ouverte`})})})]})}var Q={x:-2.5,z:2},il={x0:-35,x1:30,z0:-31,z1:42};function al(e,t){let n=Math.max(il.x0-e,e-il.x1),r=Math.max(il.z0-t,t-il.z1);return Math.max(n,r)}var ol=`
  float horsPropriete(vec2 p) {
    vec2 d = max(vec2(${il.x0.toFixed(1)}, ${il.z0.toFixed(1)}) - p, p - vec2(${il.x1.toFixed(1)}, ${il.z1.toFixed(1)}));
    return max(d.x, d.y);
  }
`,sl=-.01,cl=2300,ll=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)},ul=(e,t)=>{let n=Math.imul(e,374761393)+Math.imul(t,668265263)|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296};function dl(e,t){let n=Math.floor(e),r=Math.floor(t),i=e-n,a=t-r,o=i*i*(3-2*i),s=a*a*(3-2*a),c=ul(n,r),l=ul(n+1,r),u=ul(n,r+1),d=ul(n+1,r+1);return c+(l-c)*o+(u-c)*s+(c-l-u+d)*o*s}function fl(e,t,n){let r=0,i=.5;for(let a=0;a<n;a++)r+=i*dl(e,t),e=e*2.03+17.3,t=t*2.03+9.1,i*=.5;return r}function pl(e,t){let n=e-Q.x,r=t-Q.z,i=ll(150,340,Math.hypot(n,r));if(i===0)return sl;let a=r>0?Math.min(r*.05,85):Math.max(r*.078,-64);a+=(fl(e/230,t/230,4)-.45)*58,a+=(fl(e/70+9,t/70,3)-.5)*9;let o=ll(520,1350,r+Math.abs(n)*.3),s=1-Math.abs(2*fl(e/520+3,t/520,4)-1);return a+=o*(120+360*s*s),sl+a*i}var ml=`
  vec3 preSec(vec2 p, float v) {
    vec3 sec = mix(vec3(1.12, 1.02, 0.78), vec3(0.86, 1.0, 0.9), v);
    float vert = smoothstep(0.42, 0.72, vn(p * 0.043 + 3.0) * 0.7 + vn(p * 0.19 + 11.0) * 0.3);
    float pele = smoothstep(0.62, 0.8, vn(p * 0.07 + 31.0));
    sec = mix(sec, vec3(0.74, 0.98, 0.62), vert * 0.75);
    sec = mix(sec, vec3(1.25, 1.05, 0.8), pele * 0.6);
    // vu de haut, le pré paraissait d'une seule couleur : grandes nappes plus claires ou plus sombres (40 à 60 m), et
    // touffes d'herbe plus sombres d'environ un mètre, effacées quand elles deviennent plus fines qu'un pixel
    sec *= mix(0.86, 1.1, vn(p * 0.018 + 50.0));
    float touffes = smoothstep(0.42, 0.92, vn(p * 1.15 + 5.0) * 0.78 + vn(p * 0.37 + 17.0) * 0.22);
    sec *= 1.0 - 0.15 * touffes * (1.0 - smoothstep(0.25, 0.8, length(fwidth(p * 1.15))));
    return sec;
  }
`,hl={taille:58,n:64,angle:.47};function gl(e,t){let n=Math.cos(hl.angle),r=Math.sin(hl.angle),i=(n*e-r*t)/hl.taille,a=(r*e+n*t)/hl.taille;return i+=.35*Math.sin(a*1.3+.7),a+=.35*Math.sin(i*1.1+2.1),[i,a]}var _l=new Uint8Array(hl.n*hl.n*4);(()=>{let{n:e,taille:t,angle:n}=hl,r=Math.cos(n),i=Math.sin(n);for(let n=0;n<e;n++)for(let a=0;a<e;a++){let o=(a<e/2?a:a-e)+.5,s=(n<e/2?n:n-e)+.5,c=pl((r*o+i*s)*t,(-i*o+r*s)*t),l=ul(a*7+3,n*13+5),u=l<.5?1:l<.68?2:l<.9?0:3;(c>95||c<-33)&&(u=0);let d=(n*e+a)*4;_l[d]=u*85,_l[d+1]=Math.round(((ul(a+91,n+17)<.5?0:.5)+(ul(a+5,n+51)-.5)*.05+1)%1*255),_l[d+2]=Math.round(ul(a+33,n+77)*255),_l[d+3]=255}})();function vl(e,t){let[n,r]=gl(e,t),{n:i,taille:a}=hl,o=(Math.floor(n)%i+i)%i,s=(Math.floor(r)%i+i)%i,c=n-Math.floor(n),l=r-Math.floor(r),u=(s*i+o)*4;return{type:Math.round(_l[u]/85),bord:Math.min(c,1-c,l,1-l)*a,rangs:_l[u+1]/255*Math.PI+hl.angle,nuance:_l[u+2]/255}}var yl=null;function bl(){return yl||(yl=new Qe(_l,hl.n,hl.n,Ce,ie),yl.magFilter=yl.minFilter=et,yl.wrapS=yl.wrapT=Ke,yl.needsUpdate=!0,yl)}function xl(e){let t=e>>>0||1;return()=>(t^=t<<13,t^=t>>>17,t^=t<<5,(t>>>0)/4294967296)}var Sl=B===`haute`,Cl=(e,t,n,r=0)=>t>e.x0-r&&t<e.x1+r&&n>e.z0-r&&n<e.z1+r,wl={x0:11.5,x1:23.5,z0:19.5,z1:30.5},Tl={x0:23,x1:30.6,z0:23.2,z1:26.8},$={x0:-16,x1:24.8,z0:14.2,z1:33.5},El={h:1.75,e:.3},Dl={x:$.x1,z:25},Ol=1.95,kl=[[11,$.z0,$.x1,$.z0],[$.x1,$.z0,$.x1,Dl.z-Ol],[$.x1,Dl.z+Ol,$.x1,$.z1],[$.x1,$.z1,$.x0,$.z1],[$.x0,$.z1,$.x0,$.z0]],Al={x0:9,x1:12.6,z0:15.6,z1:21.5},jl={oliviers:[[-13.4,30.8,4.4,1.2],[8.5,30.9,3.9,4],[21.6,17,3.6,2.2]],arbustes:[[-10.5,32.3,1.5,.3],[-7.6,32.4,1.3,1.1],[-4.4,32.2,1.6,2],[-1.2,32.4,1.4,2.7],[2,32.3,1.5,3.5],[5.1,32.4,1.3,4.4],[-14.9,27,1.4,.9],[-14.8,23.6,1.5,1.8],[-14.9,20.4,1.3,2.6],[13.4,15.3,1.3,.5],[16.4,15.4,1.5,1.4],[19.2,15.3,1.2,2.3]],fleuris:[[-6,32.5,1.5,.7],[3.5,32.5,1.4,1.9],[-15,25.3,1.4,3.1],[14.9,15.3,1.3,4.2],[-15,30.8,1.3,.2]],cypres:[[Dl.x+1.5,Dl.z-3,6.8,.4],[Dl.x+1.5,Dl.z+3,7.3,2.1]],yuccas:[[Dl.x-1.1,Dl.z-2.9,1.4,.6],[Dl.x-1.1,Dl.z+2.9,1.5,3.3]]},Ml=[[Dl.x-.75,Dl.z-2.35,.3],[Dl.x-.75,Dl.z+2.35,2.1],[-11.7,19.8,1.2],[9.4,20.9,4],[-15.3,14.9,2.6]],Nl={x0:21,x1:25,z0:-4,z1:11},Pl={x0:-13,x1:27,z0:-29,z1:-13.5},Fl={x0:-17.6,x1:12.4,z0:-11.2,z1:15.2},Il={x0:-13,x1:11.5,z0:13,z1:28.5},Ll=[[-22.5,-15],[-23.5,6],[16,-15.5],[17.5,4.5],[-19,33],[15.5,35],[-24,22]],Rl=(e,t,n)=>Ll.some(([r,i])=>Math.hypot(e-r,t-i)<n),zl=(()=>{let e=xl(4711),t=[];for(let n of[-31.5,-26])for(let r=-27;r<=39;r+=6.5){let i=n+(e()-.5)*.8,a=r+(e()-.5)*.8;Rl(i,a,4.5)||t.push([`olivier`,i,a,1+e()*.25])}t.push([`pin`,22,37,1.5],[`pin`,-3,36.5,1.55],[`pin`,-11,38.5,1.3],[`pin`,7,39,1.4],[`pin`,27.5,16,1.35],[`pin`,28.5,-10,1.3]),t.push([`chene`,27.5,3.5,1.25],[`chene`,-18.5,-25,1.2],[`chene`,-17,38,1.1]);for(let n of[12.5,16,19.5,23])t.push([`cypres`,n,wl.z1+1.3,1+e()*.15]);let{x0:n,x1:r,z0:i,z1:a}=il,o=1.3,s=[[n+o,i+o,r-o,i+o],[r-o,i+o,r-o,a-o],[r-o,a-o,n+o,a-o],[n+o,a-o,n+o,i+o]],c=0;for(let[n,r,i,a]of s){let o=Math.hypot(i-n,a-r);for(let s=1;s<o;s+=2.3+e()*.9){let l=n+(i-n)*s/o+(e()-.5)*1.1,u=r+(a-r)*s/o+(e()-.5)*1.1;c++,l>27&&Math.abs(u-Tl.z0/2-Tl.z1/2)<3.6||(c%7==3?t.push([`chene`,l,u,.6+e()*.3]):t.push([`buisson`,l,u,.75+e()*.45]))}}for(let o=0;o<26;){let s=n+3+e()*(r-n-6),c=i+3+e()*(a-i-6);Bl(s,c,2)||(t.push([`buisson`,s,c,.4+e()*.35]),o++)}return t})();function Bl(e,t,n=.4){return Cl(Fl,e,t,n)||Cl(Il,e,t,n)||Cl($,e,t,n+.6)||Cl(wl,e,t,n)||Cl(Tl,e,t,n)||Cl(Nl,e,t,n)||Cl(Pl,e,t,n)}function Vl(e){let t=xl(1885),n=[],{x0:r,x1:i,z0:a,z1:o}=Pl;for(let s=a+.8;s<o-.5;s+=1.7)for(let a=r+.6;a<i-.4;a+=e?1.1:.8)Rl(a,s,2.6)||n.push([a+(t()-.5)*.12,s+(t()-.5)*.1,.85+t()*.3]);return n}function Hl(e){let t=xl(90210),n=[],{x0:r,x1:i,z0:a,z1:o}=il;for(;n.length<e;){let e=r+.5+t()*(i-r-1),s=a+.5+t()*(o-a-1);Bl(e,s)||n.push([e,s,.22+t()*t()*.5,t()*Math.PI*2])}return n}var Ul=V.sols,Wl=Ul.pelouseSansRepetition[Ut],Gl=`
  #ifdef USE_MAP
    float kT = vn(vPosP.xz * 0.23) * 8.0;
    float iT = floor(kT);
    float fT = fract(kT);
    vec2 oA = sin(vec2(3.0, 7.0) * iT);
    vec2 oB = sin(vec2(3.0, 7.0) * (iT + 1.0));
    vec4 gT = vec4(dFdx(vMapUv), dFdy(vMapUv));
    vec4 cA = textureGrad(map, vMapUv + oA, gT.xy, gT.zw);
    vec4 cB = textureGrad(map, vMapUv + oB, gT.xy, gT.zw);
    float wT = smoothstep(0.2, 0.8, fT - 0.1 * dot(cA.rgb - cB.rgb, vec3(1.0)));
    diffuseColor *= mix(cA, cB, wT);
  #endif
`,Kl=e=>e.toFixed(3);function ql(e,t={}){e.uniforms.uCiel=q.uCiel,e.vertexShader=`varying vec3 vPosP;\n${t.sommetEntete??``}\n`+e.vertexShader.replace(`#include <project_vertex>`,`#include <project_vertex>\n  vPosP = (modelMatrix * vec4(transformed, 1.0)).xyz;\n${t.sommet??``}`),e.fragmentShader=`varying vec3 vPosP;
    uniform sampler2D uCiel;
    float h2(vec2 p) { return fract(sin(dot(p, vec2(41.3, 289.1))) * 43758.5); }
    float vn(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
      return mix(mix(h2(i), h2(i + vec2(1, 0)), f.x), mix(h2(i + vec2(0, 1)), h2(i + vec2(1, 1)), f.x), f.y); }
    ${H?ml:``}
    ${t.entete??``}
    `+e.fragmentShader.replace(`#include <map_fragment>`,`${Wl?Gl:`#include <map_fragment>`}
      #ifdef USE_MAP
        // au loin, la texture répétée dessine des bandes régulières : on passe à sa teinte moyenne
        float loin = smoothstep(${Kl(Ul.pelouseFonduDebut)}, ${Kl(Ul.pelouseFonduFin)}, distance(vPosP, cameraPosition));
        // de près : la texture photo, un peu fondue dans sa teinte moyenne (cache sa répétition)
        diffuseColor.rgb = mix(diffuseColor.rgb, textureLod(map, vMapUv, 12.0).rgb * diffuse, max(loin, ${Kl(Ul.pelouseUniformite)}));
      #endif
      float v = vn(vPosP.xz * 0.12) * 0.65 + vn(vPosP.xz * 0.37 + 7.0) * 0.35;
      // dans le jardin (derrière la haie) : pelouse arrosée, verte, tondue en bandes ; dehors : prairie sèche
      vec2 dJ = max(vec2(${Y.x0.toFixed(1)}, ${Y.z0.toFixed(1)}) - vPosP.xz, vPosP.xz - vec2(${Y.x1.toFixed(1)}, ${Y.z1.toFixed(1)}));
      float jardin = 1.0 - smoothstep(-0.6, 0.6, max(dJ.x, dJ.y) + (vn(vPosP.xz * 1.3) - 0.5) * 0.5);
      ${H?`// nouveau rendu : la même pelouse dans l'enclos de la maison (mur de clôture, refonte/planDomaine.ts)
      vec2 dE = max(vec2(${$.x0.toFixed(2)}, ${$.z0.toFixed(2)}) - vPosP.xz, vPosP.xz - vec2(${$.x1.toFixed(2)}, ${$.z1.toFixed(2)}));
      jardin = max(jardin, 1.0 - smoothstep(-0.35, -0.05, max(dE.x, dE.y)));`:``}
      vec3 sec = ${H?`preSec(vPosP.xz, v)`:`mix(vec3(1.12, 1.02, 0.78), vec3(0.86, 1.0, 0.9), v)`};
      float bandes = 1.0 + 0.07 * smoothstep(-0.15, 0.15, sin(vPosP.x * 1.9635));
      // nouveau rendu : gazon arrosé d'un vert franc (photos de référence), il virait au jaune en plein soleil
      vec3 vert = ${H?`vec3(0.36, 0.8, 0.27)`:`vec3(0.5, 0.78, 0.4)`} * mix(0.9, 1.08, v) * bandes;
      diffuseColor.rgb *= mix(sec, vert, jardin);
      ${t.couleur??``}`).replace(`#include <normal_fragment_maps>`,`${Wl?O.normal_fragment_maps.replace(`texture2D( normalMap, vNormalMapUv )`,`mix(textureGrad(normalMap, vNormalMapUv + oA, gT.xy, gT.zw), textureGrad(normalMap, vNormalMapUv + oB, gT.xy, gT.zw), wT)`):`#include <normal_fragment_maps>`}
      #ifdef USE_MAP
        normal = normalize(mix(normal, nonPerturbedNormal, max(loin, ${Kl(1-Ul.pelouseRelief)})));
      #endif
      ${t.normale??``}`).replace(`#include <opaque_fragment>`,`// au loin, la pelouse prend la couleur du ciel dans la même direction (avant le rendu des couleurs, comme le fond) :
      // aucun bord visible au dézoom, ni de raccord entre le sol et le ciel
      ${H?`// nouveau rendu : la pelouse s’arrête au bord du replat et prend la brume de la scène, comme le paysage`:`vec3 dirC = normalize(vPosP - cameraPosition);
      vec2 uvC = vec2(atan(dirC.z, dirC.x) * 0.15915494 + 0.5, asin(clamp(dirC.y, -1.0, 1.0)) * 0.31830989 + 0.5);
      float fC = clamp((distance(vPosP, cameraPosition) - ${Kl(V.brume.debut)}) / 1400.0, 0.0, 1.0);
      fC = 1.0 - pow(1.0 - fC, 3.0);
      outgoingLight = mix(outgoingLight, texture2D(uCiel, uvC).rgb * ${Kl(V.lumiere.fondIntensite)}, fC);`}
      #include <opaque_fragment>`)}var Jl=12,Yl=Bt&&Nt(`secteurs-tactile`)?6e4:8e3,Xl=new L,Zl=new j;function Ql(e){for(let t of[...e.children])t.userData.secteur&&(e.remove(t),t.dispose());e.layers.set(0)}function $l(e){Ql(e);let t=e.geometry,n=(t.index?t.index.count:t.attributes.position.count)/3*e.count;if(!Nt(`secteurs`)||n<Yl)return()=>{};let r=Array.from({length:Jl},()=>[]);for(let t=0;t<e.count;t++){e.getMatrixAt(t,Xl),Zl.setFromMatrixPosition(Xl);let n=Math.atan2(Zl.z-Q.z,Zl.x-Q.x);r[Math.min(11,Math.floor((n+Math.PI)/(2*Math.PI)*Jl))].push(t)}let i=e.instanceMatrix.array,a=e.instanceColor?.array;for(let t of r){if(!t.length)continue;let n=new ve(e.geometry,e.material,t.length);if(t.forEach((e,t)=>n.instanceMatrix.array.set(i.subarray(e*16,e*16+16),t*16)),a){let e=new Float32Array(t.length*3);t.forEach((t,n)=>e.set(a.subarray(t*3,t*3+3),n*3)),n.instanceColor=new re(e,3)}n.castShadow=e.castShadow,n.receiveShadow=e.receiveShadow,n.customDepthMaterial=e.customDepthMaterial,n.raycast=()=>{},n.userData.secteur=!0,n.computeBoundingSphere(),e.add(n)}return e.layers.disableAll(),()=>Ql(e)}function eu(e,t,n,r,i,a){let o=new E,s=-r,c=-n;o.moveTo(e+i,s),o.lineTo(t-i,s),o.quadraticCurveTo(t,s,t,s+i),o.lineTo(t,c-i),o.quadraticCurveTo(t,c,t-i,c),o.lineTo(e+i,c),o.quadraticCurveTo(e,c,e,c-i),o.lineTo(e,s+i),o.quadraticCurveTo(e,s,e+i,s);let l=new $e(o,8);return l.rotateX(-Math.PI/2),l.translate(0,a,0),l}var tu=new P(1.25,1.17,1.02),nu=new P(1.3,1.12,.84);function ru(){let e=Jr(`gravier`),{sol:t,bordure:n}=(0,U.useMemo)(()=>{let e=(e,t)=>J([eu(wl.x0-e,wl.x1+e,wl.z0-e,wl.z1+e,1.6+e,t),eu(Tl.x0-1,Tl.x1,Tl.z0-e,Tl.z1+e,.05,t),eu(Al.x0-e,Al.x1+e,Al.z0-e,Al.z1+e,.9+e,t)]);return{sol:e(0,.014),bordure:e(.14,.008)}},[]);return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(`mesh`,{geometry:n,receiveShadow:!0,children:(0,K.jsx)(`meshStandardMaterial`,{color:`#6b6257`,roughness:.9,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1})}),(0,K.jsx)(`mesh`,{geometry:t,receiveShadow:!0,children:(0,K.jsx)(`meshStandardMaterial`,{...e,color:tu,...Yr(`gravier`),polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})})]})}function iu(){let e=Jr(`gravier`),{x0:t,x1:n,z0:r,z1:i}=Nl,a=(0,U.useMemo)(()=>eu(t,n,r,i,.02,.016),[t,n,r,i]),o=(t+n)/2,s=(r+i)/2,c=(0,K.jsx)(`meshStandardMaterial`,{color:`#5b4a3a`,roughness:.9});return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(`mesh`,{geometry:a,receiveShadow:!0,children:(0,K.jsx)(`meshStandardMaterial`,{...e,color:nu,...Yr(`gravier`),polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})}),[r,i].map(e=>(0,K.jsxs)(`mesh`,{position:[o,.07,e],castShadow:!0,receiveShadow:!0,children:[(0,K.jsx)(`boxGeometry`,{args:[n-t+.24,.14,.12]}),c]},e)),[t,n].map(e=>(0,K.jsxs)(`mesh`,{position:[e,.07,s],castShadow:!0,receiveShadow:!0,children:[(0,K.jsx)(`boxGeometry`,{args:[.12,.14,i-r]}),c]},e)),[[.4,3.1],[-.3,3.5],[.9,4.4]].map(([e,t],n)=>(0,K.jsxs)(`mesh`,{position:[o+e,.053,s+t],castShadow:!0,children:[(0,K.jsx)(`sphereGeometry`,{args:[.037,16,12]}),(0,K.jsx)(`meshStandardMaterial`,{color:`#b8bcc0`,roughness:.3,metalness:.9})]},n)),(0,K.jsxs)(`mesh`,{position:[o+.15,.031,s+3],children:[(0,K.jsx)(`sphereGeometry`,{args:[.015,10,8]}),(0,K.jsx)(`meshStandardMaterial`,{color:`#d9a441`,roughness:.6})]})]})}function au(){return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(ru,{}),(0,K.jsx)(iu,{})]})}var ou=e=>e.toFixed(4),su=Ut===`haute`;function cu(){let e=su,t=e?210:130,n=300*(e?2:1),r=new Float32Array(t*(n+1)*3),i=new Float32Array(t*(n+1)*2);for(let e=0;e<t;e++){let a=31*(cl/31)**(e/(t-1));for(let t=0;t<=n;t++){let o=t/n*Math.PI*2,s=Q.x+Math.cos(o)*a,c=Q.z+Math.sin(o)*a,l=e*(n+1)+t;r.set([s,pl(s,c),c],l*3),i.set([s,c],l*2)}}let a=[];for(let e=0;e<t-1;e++)for(let t=0;t<n;t++){let r=e*(n+1)+t,i=r+n+1;a.push(r,r+1,i,r+1,i+1,i)}let o=new N;return o.setAttribute(`position`,new k(r,3)),o.setAttribute(`uv`,new k(i,2)),o.setIndex(a),o.computeVertexNormals(),o}var lu=B===`haute`?280:150,uu={sommetEntete:`varying float vPenteT;`,sommet:`  vPenteT = normal.y;`,entete:`
    varying float vPenteT;
    uniform sampler2D uParcelles;
    uniform vec3 uOmbreRang; // xz : direction opposée au soleil × longueur d'ombre par mètre ; z : force de l'ombre
    ${ol}
  `,couleur:`
      vec2 pr = vPosP.xz;
      // parcelle sous ce point (mêmes formules que terrain.ts)
      vec2 q = vec2(${ou(Math.cos(hl.angle))} * pr.x - ${ou(Math.sin(hl.angle))} * pr.y, ${ou(Math.sin(hl.angle))} * pr.x + ${ou(Math.cos(hl.angle))} * pr.y) / ${ou(hl.taille)};
      q.x += 0.35 * sin(q.y * 1.3 + 0.7);
      q.y += 0.35 * sin(q.x * 1.1 + 2.1);
      vec4 pd = texture2D(uParcelles, (floor(q) + 0.5) / ${ou(hl.n)});
      float type = floor(pd.r * 3.0 + 0.5);
      vec2 fq = fract(q);
      float bord = min(min(fq.x, 1.0 - fq.x), min(fq.y, 1.0 - fq.y)) * ${ou(hl.taille)};
      float ang = pd.g * 3.14159265 + ${ou(hl.angle)};
      vec2 rangs = vec2(cos(ang), sin(ang));
      float n1 = vn(pr * 0.05), n2 = vn(pr * 0.31 + 3.0), n3 = vn(pr * 1.7);
      // au loin, les motifs fins deviennent plus petits qu'un pixel et scintillent en taches (montagnes) : chacun
      // se fond dans sa valeur moyenne à mesure qu'il rapetisse à l'écran
      float finP = length(fwidth(pr));
      n1 = mix(n1, 0.5, smoothstep(0.6, 2.4, finP * 0.05 * 6.0));
      n2 = mix(n2, 0.5, smoothstep(0.6, 2.4, finP * 0.31));
      n3 = mix(n3, 0.5, smoothstep(0.6, 2.4, finP * 1.7));
      // (couleurs sombres : sous le plein soleil du nouveau rendu, une terre à 0,36 sortait crème)
      vec3 terre = mix(vec3(0.17, 0.105, 0.065), vec3(0.235, 0.15, 0.09), n2) * (0.88 + 0.24 * n3);
      vec3 colP;
      if (type < 0.5) {
        // garrigue : chênes kermès, thym, cailloux
        colP = mix(vec3(0.045, 0.07, 0.028), vec3(0.19, 0.17, 0.10), smoothstep(0.3, 0.75, n2 * 0.55 + n1 * 0.45));
        colP = mix(colP, vec3(0.30, 0.285, 0.25), smoothstep(0.7, 0.85, vn(pr * 0.11 + 20.0)));
      } else if (type < 1.5) {
        // vigne : un rang tous les 2,5 m. Entre les rangs : terre travaillée, traces de roues, et une bande d'herbe
        // sèche un inter-rang sur deux (enherbement). Chaque motif se fond dans sa moyenne quand il devient trop fin.
        float um = dot(pr, rangs);
        float jeune = step(pd.b, 0.14);
        float u = um / 2.5;
        float finU = smoothstep(0.25, 0.8, fwidth(u));
        float du = (fract(u) - 0.5) * 2.5;            // distance au rang (m), de -1,25 à 1,25
        float di = (fract(u + 0.5) - 0.5) * 2.5;      // distance au milieu de l'inter-rang
        float roues = smoothstep(0.16, 0.05, abs(abs(di) - 0.52));
        float herbe = step(0.5, fract(floor(u + 0.5) * 0.5)) * smoothstep(0.85, 0.55, abs(di) + (n3 - 0.5) * 0.35);
        vec3 sol = terre * (1.0 - 0.22 * roues * (1.0 - finU));
        sol = mix(sol, mix(vec3(0.20, 0.19, 0.09), vec3(0.12, 0.16, 0.06), n2), mix(herbe * 0.85, 0.3, finU));
        // ombre du rang (un mur de feuilles de 1,35 m) couchée sur l'inter-rang, à l'opposé du soleil
        float sR = 1.35 * (1.0 - 0.45 * jeune) * dot(uOmbreRang.xy, rangs);
        float lR = abs(sR), cR = du * sign(sR);
        float o1 = smoothstep(-0.1, 0.12, cR) * (1.0 - smoothstep(lR - 0.2, lR + 0.12, cR));
        float c2 = cR + 2.5;
        float o2 = smoothstep(-0.1, 0.12, c2) * (1.0 - smoothstep(lR - 0.2, lR + 0.12, c2));
        float ombreR = mix(max(o1, o2), min(1.0, lR / 2.5), finU);
        sol *= 1.0 - 0.6 * uOmbreRang.z * ombreR;
        float rang = 1.0 - smoothstep(0.3 - 0.14 * jeune, 0.55 - 0.25 * jeune, abs(fract(u) - 0.5) * 2.0);
        // vigueur inégale : des plages où la vigne est plus maigre (mêmes plages que les ceps en relief, à peu près)
        rang = mix(rang * (0.75 + 0.5 * n3), 0.62 - 0.3 * jeune, finU) * (0.72 + 0.38 * n2);
        // là où les ceps sont en relief, le sol sous le rang est seulement à l'ombre ; au-delà, le rang est peint
        float peint = smoothstep(${ou(lu-25)}, ${ou(lu)}, distance(pr, vec2(${ou(Q.x)}, ${ou(Q.z)})));
        colP = mix(sol, mix(sol * 0.5, vec3(0.075, 0.17, 0.035) * (0.8 + 0.5 * pd.b), peint), rang);
      } else if (type < 2.5) {
        // champ moissonné : chaume blond, traces du passage de la moissonneuse
        float u = dot(pr, rangs) / 4.0;
        float trace = 0.5 + 0.5 * sin(u * 6.2831853);
        trace = mix(trace, 0.5, smoothstep(0.2, 0.6, fwidth(u)));
        colP = mix(vec3(0.33, 0.25, 0.105), vec3(0.42, 0.33, 0.15), trace) * (0.85 + 0.3 * pd.b) * (0.9 + 0.2 * n3);
      } else {
        // oliveraie : herbe sèche entre les arbres
        colP = mix(vec3(0.26, 0.22, 0.11), vec3(0.15, 0.18, 0.075), n2);
      }
      // chemins entre les parcelles : une piste de terre à deux ornières, de l'herbe au milieu, et un talus d'herbe
      // sèche de chaque côté jusqu'aux premiers ceps (les détails fins s'effacent au loin)
      float bn = bord + (n3 - 0.5) * 0.8;
      float finB = smoothstep(0.3, 1.2, fwidth(bord));
      vec3 herbeSeche = mix(vec3(0.215, 0.19, 0.09), vec3(0.125, 0.155, 0.062), n2 * 0.6 + n3 * 0.4);
      colP = mix(colP, herbeSeche, 1.0 - smoothstep(2.3, 3.4, bn));
      float piste = 1.0 - smoothstep(1.05, 1.6, bn);
      colP = mix(colP, vec3(0.3, 0.25, 0.175) * (0.85 + 0.3 * n2), piste);
      colP = mix(colP, herbeSeche * 0.9, piste * (1.0 - smoothstep(0.12, 0.42, bn)) * 0.75 * (1.0 - finB));
      colP *= 1.0 - 0.2 * smoothstep(0.36, 0.14, abs(bn - 0.75)) * piste * (1.0 - finB);
      float alt = vPosP.y;
      // collines et montagnes : relief d'érosion dessiné (crêtes et ravines), forêt de chênes verts et de pins dans
      // les creux, garrigue claire sur les crêtes, calcaire gris sur les escarpements
      float n4 = mix(vn(pr * 0.012 + 40.0), 0.5, smoothstep(0.6, 2.4, finP * 0.012 * 10.0));
      float c1M = 1.0 - abs(2.0 * vn(pr * 0.011 + 3.0) - 1.0);
      float c2M = mix(1.0 - abs(2.0 * vn(pr * 0.029 + 11.0) - 1.0), 0.5, smoothstep(0.6, 2.4, finP * 0.029 * 6.0));
      float c3M = mix(1.0 - abs(2.0 * vn(pr * 0.083 + 5.0) - 1.0), 0.5, smoothstep(0.6, 2.4, finP * 0.083 * 6.0));
      float c4M = mix(vn(pr * 0.27 + 9.0), 0.5, smoothstep(0.6, 2.4, finP * 0.27 * 6.0));
      float montagneP = smoothstep(60.0, 120.0, alt + n1 * 30.0);
      // hauteur du relief dessiné (m) : sert aussi à l'éclairage (voir plus bas, normale)
      float hM = (c1M * c1M * 34.0 + c2M * 11.0 + c3M * 3.6 + c4M * 1.0) * montagneP;
      float creteM = c1M * 0.55 + c2M * 0.3 + c3M * 0.15;
      vec3 foret = mix(vec3(0.028, 0.05, 0.026), vec3(0.06, 0.09, 0.04), n2 * 0.6 + c4M * 0.4);
      vec3 garrigue = mix(vec3(0.115, 0.125, 0.07), vec3(0.185, 0.175, 0.105), n2);
      vec3 montagne = mix(foret, garrigue, smoothstep(0.6, 0.92, creteM * 0.75 + n4 * 0.25));
      vec3 roche = mix(vec3(0.24, 0.235, 0.22), vec3(0.34, 0.325, 0.29), n2);
      float escarpe = smoothstep(0.62, 0.42, vPenteT) * smoothstep(60.0, 140.0, alt);
      montagne = mix(montagne, roche, max(escarpe * 0.5, smoothstep(0.8, 0.97, creteM) * 0.55 * smoothstep(110.0, 220.0, alt)));
      colP = mix(colP, montagne, montagneP);
      // ravines plus sombres : du relief même là où le maillage est grossier
      colP *= 0.86 + 0.28 * mix(vn(pr * 0.02 + 7.0), 0.5, smoothstep(0.6, 2.4, finP * 0.02 * 8.0));
      // au bord de la mer : sable
      colP = mix(colP, vec3(0.46, 0.4, 0.28), smoothstep(${ou(-31)}, ${ou(-38)}, alt));
      // les cultures commencent à la limite de la propriété (le pré autour du jardin et de la maison)
      float cultures = smoothstep(0.0, 9.0, horsPropriete(pr) + (n3 - 0.5) * 3.0);
      diffuseColor.rgb = mix(diffuseColor.rgb, colP, cultures);`,normale:`      normal = normalize(mix(normal, nonPerturbedNormal, cultures));
      {
        // relief d'érosion des montagnes : la normale suit la pente de hM (mètres), sans un triangle de plus
        vec3 sxM = dFdx(-vViewPosition), syM = dFdy(-vViewPosition);
        vec3 r1M = cross(syM, normal), r2M = cross(normal, sxM);
        float detM = dot(sxM, r1M);
        vec3 gM = sign(detM) * (dFdx(hM) * r1M + dFdy(hM) * r2M);
        normal = normalize(abs(detM) * normal - gM * 0.55);
      }`},du={value:new j(0,0,0)};function fu(){let e=Jr(`pelouse`),t=(0,U.useMemo)(()=>Br(su===(B===`haute`)?`paysage:terrain`:`paysage:terrain:fin`,cu),[]),n=(0,U.useMemo)(()=>bl(),[]);(0,U.useEffect)(()=>()=>n.dispose(),[n]);let{onBeforeCompile:r}=(0,U.useMemo)(()=>Yr(`pelouse`,e=>{e.uniforms.uParcelles={value:n},e.uniforms.uOmbreRang=du,ql(e,uu)}),[n]);return(0,K.jsx)(`mesh`,{geometry:t,raycast:()=>{},frustumCulled:!1,receiveShadow:!0,children:(0,K.jsx)(`meshStandardMaterial`,{...e,onBeforeCompile:r,customProgramCacheKey:()=>`terrain-refonte`})})}var pu=140;function mu(e){e.fragmentShader=e.fragmentShader.replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>
  normal = normalize(mix(normal, nonPerturbedNormal, smoothstep(180.0, 900.0, length(vViewPosition))));`)}function hu(){let e=c(`/agr-piscine-confidentialite/demo-3d/textures/eau/normales.webp`),t=(0,U.useMemo)(()=>{let t=e.clone();return t.wrapS=t.wrapT=Ke,t.repeat.set(260,260),t.needsUpdate=!0,t},[e]);return I((e,n)=>void(t.offset.x+=n*.004,t.offset.y+=n*.0025)),(0,K.jsxs)(`mesh`,{position:[Q.x,-40,Q.z],rotation:[-Math.PI/2,0,0],raycast:()=>{},children:[(0,K.jsx)(`ringGeometry`,{args:[pu,2480,72,1]}),(0,K.jsx)(`meshStandardMaterial`,{color:`#0c4560`,roughness:.16,metalness:0,normalMap:t,normalScale:[.55,.55],onBeforeCompile:mu,customProgramCacheKey:()=>`mer-refonte`})]})}function gu(e,t,n){let r=(e,t,n)=>{let r=Math.sin(e*127.1+t*311.7+n*74.7)*43758.5453;return r-Math.floor(r)},i=Math.floor(e),a=Math.floor(t),o=Math.floor(n),s=(e,t,n)=>e+(t-e)*n*n*(3-2*n),c=e-i,l=t-a,u=n-o;return s(s(s(r(i,a,o),r(i+1,a,o),c),s(r(i,a+1,o),r(i+1,a+1,o),c),l),s(s(r(i,a,o+1),r(i+1,a,o+1),c),s(r(i,a+1,o+1),r(i+1,a+1,o+1),c),l),u)}function _u(e){let t=e.attributes.position,n=new Map,r=[],i=[];for(let e=0;e<t.count;e++){let a=`${t.getX(e).toFixed(4)},${t.getY(e).toFixed(4)},${t.getZ(e).toFixed(4)}`,o=n.get(a);o===void 0&&(o=r.length/3,n.set(a,o),r.push(t.getX(e),t.getY(e),t.getZ(e))),i.push(o)}let a=new N;return a.setAttribute(`position`,new k(new Float32Array(r),3)),a.setIndex(i),a}function vu(e,t,n,r,i=1){let a=xl(r),o=new P(t),s=new P(n),c=new P,l=new j;e.forEach(e=>l.add(new j(...e.c))),l.divideScalar(e.length);let u=Math.min(...e.map(e=>e.c[1]-e.r[1])),d=Math.max(...e.map(e=>e.c[1]+e.r[1]));return J(e.map(t=>{let n=_u(new fe(1,i)),r=n.attributes.position,f=new Float32Array(r.count*3),p=.9+a()*.2,m=a()*50,h=new j;for(let n=0;n<r.count;n++){h.fromBufferAttribute(r,n);let i=.8+gu(h.x*1.7+m,h.y*1.7,h.z*1.7)*.4;h.set(t.c[0]+h.x*t.r[0]*i,t.c[1]+h.y*t.r[1]*i,t.c[2]+h.z*t.r[2]*i),r.setXYZ(n,h.x,h.y,h.z);let a=(h.y-u)/Math.max(d-u,.01),g=h.clone().sub(l),_=Math.min(1,Math.hypot(g.x/Math.max(...e.map(e=>Math.abs(e.c[0]-l.x)+e.r[0])),g.z/Math.max(...e.map(e=>Math.abs(e.c[2]-l.z)+e.r[2])))*1.1);c.copy(o).lerp(s,Math.min(1,Math.max(0,a*.75+_*.35))**1.2);let v=p*(.75+.25*_);f.set([c.r*v,c.g*v,c.b*v],n*3)}n.setAttribute(`color`,new k(f,3)),n.computeVertexNormals();let g=n.attributes.normal,_=new j,v=new j;for(let e=0;e<g.count;e++)_.fromBufferAttribute(g,e),v.fromBufferAttribute(r,e).sub(l),v.y*=.6,v.normalize(),_.lerp(v,.55).normalize(),g.setXYZ(e,_.x,_.y,_.z);return n.setAttribute(`aFeuille`,new k(new Float32Array(r.count).fill(1),1)),n}))}function yu(e,t,n,r,i,a=7){let o=new j(...e),s=new j(...t).clone().sub(o),c=new Ae(r,n,s.length(),a,1,!0);c.translate(0,s.length()/2,0),c.applyQuaternion(new A().setFromUnitVectors(new j(0,1,0),s.normalize())),c.translate(o.x,o.y,o.z),c.deleteAttribute(`uv`);let l=new P(i),u=new Float32Array(c.attributes.position.count*3);for(let e=0;e<c.attributes.position.count;e++){let t=1-Math.min(1,Math.max(0,(c.attributes.position.getY(e)-1)/6))*.4;u.set([l.r*t,l.g*t,l.b*t],e*3)}return c.setAttribute(`color`,new k(u,3)),c.setAttribute(`aFeuille`,new k(new Float32Array(c.attributes.position.count),1)),c}function bu(e,t,n,r,i,a){let o=xl(i),s=[a];for(let i=0;i<e;i++){let a=i/e*Math.PI*2+o()*.6,c=t*(.8+o()*.35),l=r[0]+o()*(r[1]-r[0]);s.push({c:[Math.cos(a)*c,n+(o()-.5)*.5,Math.sin(a)*c],r:[l,l*.52,l]})}return s}var xu=`#5f4634`,Su=`#5a5045`,Cu=`#4a443b`;function wu(e,t,n,r,i){let a=e.length-1;return e.slice(0,a).map((o,s)=>yu(o,e[s+1],t+(n-t)*s/a,t+(n-t)*(s+1)/a,r,i))}var Tu={pin:{bois:e=>e?[...wu([[0,0,0],[.12,1.4,.04],[.3,2.8,0],[.38,4,.1]],.3,.2,xu,7),...[0,1,2,3,4].flatMap(e=>{let t=e*1.2566+.4;return wu([[.38,3.9,.1],[.38+Math.cos(t)*.95,5.05,.1+Math.sin(t)*.95],[Math.cos(t)*1.95,5.95,Math.sin(t)*1.95]],.15,.06,xu,5)})]:[yu([0,0,0],[.38,4.1,.1],.3,.2,xu,4),yu([.38,4,.1],[-1.2,5.9,-.4],.16,.08,xu,3),yu([.38,4,.1],[1.4,5.9,.6],.16,.08,xu,3)],masses:[...bu(8,2,6.2,[.95,1.3],3,{c:[.1,6.6,0],r:[1.6,.8,1.6]}),...bu(4,.95,6.8,[.8,1],31,{c:[0,6.9,0],r:[.9,.5,.9]}).slice(1)],bas:`#16271a`,haut:`#4f6a35`,graine:3,feuilles:{forme:`aiguille`,tons:[`#1f3520`,`#39562b`,`#6c8a45`],releve:[.3,.95],profondeur:[-.25,.25]},taille:[[1.9,2.5],[.9,1.3],[.62,.9]]},cypres:{bois:()=>[],masses:[0,1,2,3,4,5].map(e=>({c:[Math.sin(e*2.1)*.06,.9+e*1.35,Math.cos(e*1.7)*.06],r:[.92-e*.12,1.1,.92-e*.12]})),bas:`#0e1d12`,haut:`#2c4528`,graine:5,feuilles:{forme:`ecaille`,tons:[`#132a1b`,`#21432a`,`#3a633c`],releve:[.55,1.1],profondeur:[-.3,.12]},taille:[[1.2,1.6],[.6,.85],[.2,.3]],dense:1.7},buisson:{bois:()=>[],masses:[{c:[0,.55,0],r:[1.15,.75,1.1]},{c:[.8,.4,.35],r:[.75,.55,.75]},{c:[-.65,.4,-.45],r:[.8,.55,.8]}],bas:`#1a2611`,haut:`#56622f`,graine:7,feuilles:{forme:`ovale`,tons:[`#27361a`,`#465628`,`#778244`],releve:[.25,.8],profondeur:[-.25,.2]},taille:[[1,1.4],[.55,.8],[.3,.44]]},olivier:{bois:e=>[...wu([[0,0,0],[.1,.6,.06],[.15,1.2,.05]],.28,.2,Su,e?7:4),...wu([[.15,1.15,.05],[-.4,1.8,.12],[-.7,2.3,.2]],.17,.09,Su,e?6:3),...wu([[.15,1.15,.05],[.55,1.75,-.12],[.8,2.4,-.3]],.16,.08,Su,e?6:3)],masses:bu(5,1.15,2.6,[.8,1.05],9,{c:[0,3,0],r:[1.15,.8,1.15]}),bas:`#344233`,haut:`#94a284`,graine:9,feuilles:{forme:`lanceole`,tons:[`#3b4836`,`#5e6c54`,`#a6b09a`],releve:[.25,.8],profondeur:[-.3,.3]},taille:[[1.3,1.7],[.6,.85],[.34,.5]]},chene:{bois:e=>[...wu([[0,0,0],[.06,.8,.02],[.1,1.6,.05]],.32,.24,Cu,e?7:4),...wu([[.1,1.5,.05],[-.5,2.1,.2],[-.8,2.6,.3]],.18,.1,Cu,e?6:3),...wu([[.1,1.5,.05],[.6,2.2,-.1],[.9,2.7,-.2]],.18,.1,Cu,e?6:3)],masses:bu(6,1.5,3.2,[1.05,1.35],13,{c:[0,3.6,0],r:[1.7,1.25,1.7]}),bas:`#122015`,haut:`#3d5530`,graine:13,feuilles:{forme:`ovale`,tons:[`#1a2d1c`,`#2f4a29`,`#55703d`],releve:[.25,.85],profondeur:[-.25,.25]},taille:[[1.7,2.2],[.8,1.15],[.42,.62]]}},Eu=(e,t)=>`#${new P(e).multiplyScalar(t).getHexString()}`;function Du(e,t){let n=(e.coeur??e.masses).map(e=>({c:e.c,r:[e.r[0]*.8,e.r[1]*.8,e.r[2]*.8]})),r=J([...e.bois(t>0),vu(n,Eu(e.bas,.8),Eu(e.haut,.62),e.graine,+(t===2))]),i=vu(e.masses,e.bas,e.haut,e.graine,t===2?2:1),[a,o]=e.taille[t],s=(a+o)/2,c={...e.feuilles,taille:[a,o],vent:0,densite:(t===2?3:t?2.5:2.2)*(e.dense??1)/(s*s)},l=t=>e.masses.some(e=>((t.x-e.c[0])/(e.r[0]*.72))**2+((t.y-e.c[1])/(e.r[1]*.72))**2+((t.z-e.c[2])/(e.r[2]*.72))**2<1),u=Si(i,c,e.haut,e.graine,e=>!l(e));return i.dispose(),{coeur:r,feuilles:u,feuillage:c}}var Ou=B===`haute`?340:140;function ku(){let e=xl(20261109),t=B===`haute`?1:.5,n={pin:Math.round(1200*t),cypres:Math.round(560*t),buisson:Math.round(3e3*t),olivier:Math.round(900*t),chene:Math.round(900*t)},r={pin:[],cypres:[],buisson:[],olivier:[],chene:[]},i=new Set,a=(t,i,a,o)=>{if(r[t].length>=n[t])return;let s=pl(i,a);s<-36||r[t].push([i,s-.15,a,o,e()*Math.PI*2,.82+e()*.36])},o=Math.cos(hl.angle),s=Math.sin(hl.angle);for(let[e,t,n,r]of zl)a(e,t,n,r);for(let t=0;t<7e4;t++){let t=37+e()**1.6*1700,n=e()*Math.PI*2,r=Q.x+Math.cos(n)*t,c=Q.z+Math.sin(n)*t,l=pl(r,c),u=e();if(al(r,c)<3)continue;if(l>80){l<300&&t<620&&e()<.7&&a(u<.5?`pin`:u<.8?`chene`:`buisson`,r,c,.9+e()*.9);continue}let d=vl(r,c);if(d.type===0)a(u<.55?`buisson`:u<.8?`chene`:u<.95?`pin`:`cypres`,r,c,.6+e()*.8);else if(d.type===3){let t=Math.round((o*r-s*c)/8)*8,n=Math.round((s*r+o*c)/8)*8,l=`${t},${n}`;if(i.has(l))continue;i.add(l),r=o*t+s*n,c=-s*t+o*n,vl(r,c).type===3&&a(`olivier`,r,c,.8+e()*.35)}else d.bord<2.2&&e()<.5&&a(u<.38?`cypres`:u<.58?`chene`:u<.75?`pin`:`buisson`,r,c,.7+e()*.6)}return r}var Au=B===`haute`?95:48;function ju(e){let t={},n={},r={},i=([e,,t])=>Math.hypot(e-Q.x,t-Q.z);for(let a of Object.keys(e))t[a]=e[a].filter(e=>i(e)<Au),n[a]=e[a].filter(e=>i(e)>=Au&&i(e)<Ou),r[a]=e[a].filter(e=>i(e)>=Ou);return{toutPres:t,proches:n,loin:r}}function Mu(e){e.vertexShader=`attribute float aFeuille;
varying float vFeuille;
varying vec3 vLoc;
`+e.vertexShader.replace(`#include <begin_vertex>`,`#include <begin_vertex>
  vFeuille = aFeuille;
  vLoc = position;`),e.fragmentShader=`varying float vFeuille;
    varying vec3 vLoc;
    float h3f(vec3 p) { return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
    float vn3(vec3 p) {
      vec3 i = floor(p), f = fract(p);
      f = f * f * (3.0 - 2.0 * f);
      return mix(mix(mix(h3f(i), h3f(i + vec3(1, 0, 0)), f.x), mix(h3f(i + vec3(0, 1, 0)), h3f(i + vec3(1, 1, 0)), f.x), f.y),
                 mix(mix(h3f(i + vec3(0, 0, 1)), h3f(i + vec3(1, 0, 1)), f.x), mix(h3f(i + vec3(0, 1, 1)), h3f(i + vec3(1, 1, 1)), f.x), f.y), f.z);
    }
    `+e.fragmentShader.replace(`#include <color_fragment>`,`#include <color_fragment>
        // touffes d'une trentaine de centimètres, et des bouquets plus petits dedans
        vec3 qF = vLoc * 3.2;
        float tF = vn3(qF) * 0.62 + vn3(qF * 2.3 + 5.0) * 0.38;
        float netF = vFeuille * (1.0 - smoothstep(0.3, 0.8, length(fwidth(qF))));
        diffuseColor.rgb *= mix(1.0, mix(0.6, 1.14, smoothstep(0.28, 0.72, tF)), netF);
        // feuillages plus clairs : en plein soleil ils étaient presque noirs (photos de référence : verts francs)
        diffuseColor.rgb *= mix(1.0, 1.55, vFeuille);`).replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>
        {
          // relief des touffes (même calcul que les cartes de relief de three.js, à partir de la hauteur tF)
          vec3 sx = normalize(dFdx(-vViewPosition)), sy = normalize(dFdy(-vViewPosition));
          vec3 r1 = cross(sy, normal), r2 = cross(normal, sx);
          float det = dot(sx, r1) * faceDirection;
          vec2 dh = vec2(dFdx(tF), dFdy(tF)) * 1.6 * netF;
          normal = normalize(abs(det) * normal - sign(det) * (dh.x * r1 + dh.y * r2));
        }`).replace(`#include <aomap_fragment>`,`reflectedLight.indirectDiffuse *= 1.45;
    reflectedLight.directSpecular *= 0.15;
    #include <aomap_fragment>`)}var Nu=V.vegetaux.clarteFeuilles*vi,Pu=wi(0);function Fu({feuillage:e,graine:t}){let n=(0,U.useMemo)(()=>bi(e,t),[e,t]),r=V.vegetaux.reliefFeuilles;return(0,K.jsx)(`meshStandardMaterial`,{map:n.map,normalMap:n.normal,normalScale:[r,r],color:[Nu,Nu,Nu],vertexColors:!0,alphaTest:.5,alphaToCoverage:B===`haute`,side:2,roughness:.6,metalness:0,onBeforeCompile:Pu,customProgramCacheKey:()=>`feuilles-paysage`})}function Iu(e,t){t&&t!==e&&(Bn.delete(t),Vn.delete(t)),e&&(Bn.add(e),Vn.add(e))}function Lu({plants:e,detail:t,ombres:n=!1}){let r=(0,U.useRef)({}),i=(e,t)=>{Iu(t,r.current[e]),r.current[e]=t},a=(0,U.useMemo)(()=>Object.fromEntries(Object.keys(Tu).map(e=>[e,Br(`paysage:arbre:${e}:${t}`,()=>Du(Tu[e],t))])),[t]);return(0,U.useLayoutEffect)(()=>()=>Object.values(a).forEach(e=>(e.coeur.dispose(),e.feuilles.dispose())),[a]),(0,U.useLayoutEffect)(()=>{let t=new L,n=new A,i=new j(0,1,0),a=new P,o=[];for(let s of Object.keys(e))for(let c of[`coeur`,`feuilles`]){let l=r.current[`${s}-${c}`];l&&(e[s].forEach(([e,r,o,s,c,u],d)=>{n.setFromAxisAngle(i,c);let f=.82+u*.32+d*.618%1*.14;t.compose(new j(e,r,o),n,new j(s,s*f,s*(.9+d*.381%1*.2))),l.setMatrixAt(d,t),l.setColorAt(d,a.setRGB(u,u*(.94+d%7*.02),u*.9))}),l.instanceMatrix.needsUpdate=!0,l.instanceColor&&(l.instanceColor.needsUpdate=!0),l.computeBoundingSphere(),o.push($l(l)))}return()=>o.forEach(e=>e())},[e]),(0,K.jsx)(K.Fragment,{children:Object.keys(e).filter(t=>e[t].length).map(t=>(0,K.jsxs)(`group`,{children:[(0,K.jsx)(`instancedMesh`,{ref:e=>i(`${t}-coeur`,e),args:[a[t].coeur,void 0,e[t].length],raycast:()=>{},castShadow:n,receiveShadow:n,children:(0,K.jsx)(`meshStandardMaterial`,{vertexColors:!0,roughness:1,metalness:0,onBeforeCompile:Mu,customProgramCacheKey:()=>`arbres-loin`})}),(0,K.jsx)(`instancedMesh`,{ref:e=>i(`${t}-feuilles`,e),args:[a[t].feuilles,void 0,e[t].length],raycast:()=>{},receiveShadow:n,children:(0,K.jsx)(Fu,{feuillage:a[t].feuillage,graine:Tu[t].graine})})]},t))})}var Ru=B===`haute`?115:60,zu=4.2,Bu={forme:`vigne`,tons:[`#274417`,`#436c22`,`#789c3a`],releve:[.2,.75],profondeur:[-.25,.22]};function Vu(e){let t=[-1.4,0,1.4].flatMap((e,t)=>[{c:[e,1,0],r:[.88,.5,.25]},{c:[e+.55,1.36+t%2*.06,.03],r:[.46,.3,.19]},{c:[e-.5,.8,-.03],r:[.5,.3,.23]}]),n=[...[-1.4,0,1.4].flatMap((t,n)=>e?wu([[t,0,0],[t+.05-n*.04,.32,.03],[t-.03+n*.02,.66,-.02]],.05,.035,`#3d2f22`,5):[]),yu([.7,0,0],[.7,1.6,0],.035,.03,`#857565`,e?5:3),...e?[[-1.55,.13],[-.2,-.14],[.25,.13],[1.3,-.13],[1.6,.12]].map(([e,t],n)=>Hu(e,.64+n%3*.05,t)):[]];return Du({bois:()=>n,masses:t,coeur:[{c:[0,1.02,0],r:[2.75,.5,.15]}],bas:`#1e3312`,haut:`#3c5a22`,graine:17,dense:1.3,feuilles:Bu,taille:[[1,1.35],[.46,.62],[.46,.62]]},e)}function Hu(e,t,n){let r=_u(new fe(1,0)),i=r.attributes.position,a=new Float32Array(i.count*3);for(let r=0;r<i.count;r++){let o=i.getY(r),s=.055*(.55+.45*(o+1)*.5);i.setXYZ(r,e+i.getX(r)*s,t+o*.085,n+i.getZ(r)*s);let c=.8+.4*(r*.618%1);a.set([.085*c,.07*c,.2*c],r*3)}return r.setAttribute(`color`,new k(a,3)),r.setAttribute(`aFeuille`,new k(new Float32Array(i.count),1)),r.computeVertexNormals(),r}function Uu(){return J([yu([0,0,0],[.3,1.7,0],.065,.055,`#7c6c5a`,6),yu([-.95,0,0],[.16,1.05,0],.035,.03,`#7c6c5a`,4)])}var Wu=(e,t)=>gu(e/21,.5,t/21)*.62+gu(e/6.5+40,3.5,t/6.5)*.38;function Gu(){let e=2.5,t=new Map,n=(e,t,n)=>`${e},${t},${n}`;for(let r=Q.x-lu;r<=Q.x+lu;r+=1.6)for(let i=Q.z-lu;i<=Q.z+lu;i+=1.6){let a=Math.hypot(r-Q.x,i-Q.z);if(al(r,i)<6||a>lu)continue;let o=vl(r,i);if(o.type!==1||o.bord<3)continue;let s=Math.cos(o.rangs),c=Math.sin(o.rangs),l=(r*s+i*c)/e,u=-r*c+i*s,d=Math.floor(l),f=Math.round(u/zu),p=Math.round(o.rangs*100);if(t.has(n(p,d,f)))continue;let m=(d+.5)*e,h=f*zu,g=m*s-h*c,_=m*c+h*s,v=vl(g,_);v.type!==1||v.bord<3||t.set(n(p,d,f),{px:g,pz:_,dx:s,dz:c,angle:p,k:d,iv:f,jeune:v.nuance<=.14})}let r=[],i=[];for(let e of t.values()){let{px:a,pz:o,dx:s,dz:c}=e,l=-Math.atan2(s,-c),u=pl(a,o)-.02;for(let r of[-1,1])if(!t.has(n(e.angle,e.k,e.iv+r))){let t=a-c*r*2.35,n=o+s*r*2.35;i.push([t,pl(t,n)-.02,n,l+(r<0?Math.PI:0),e.jeune?.6:1])}let d=Wu(a,o),f=gu(a*.83+11,9.5,o*.83);d<.3&&f>.45||f>.9||r.push([a,u,o,l+(e.iv&1)*Math.PI,Math.hypot(a-Q.x,o-Q.z),d,e.jeune?.55:1])}return{rangs:r,bouts:i}}function Ku({rangs:e,detail:t}){let n=(0,U.useRef)([null,null]),r=(0,U.useMemo)(()=>Br(`paysage:troncon:${t}`,()=>Vu(t)),[t]);(0,U.useLayoutEffect)(()=>()=>(r.coeur.dispose(),r.feuilles.dispose()),[r]),(0,U.useLayoutEffect)(()=>{let t=new L,r=new A,i=new j(0,1,0),a=new P,o=[];for(let s of n.current)s&&(e.forEach(([e,n,o,c,,l,u],d)=>{r.setFromAxisAngle(i,c);let f=(.74+l*.5+d*.618%1*.12)*u;t.compose(new j(e,n,o),r,new j(1,f,(.72+l*.5)*(.6+.4*u))),s.setMatrixAt(d,t);let p=.8+l*.3+d*.381%1*.1,m=Math.max(0,.55-l)*.9;s.setColorAt(d,a.setRGB(p*(1+m*.55),p*(1+m*.15),p*(.9-m*.3)))}),s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0),s.computeBoundingSphere(),o.push($l(s)));return()=>o.forEach(e=>e())},[e]);let i=e=>t=>{Iu(t,n.current[e]),n.current[e]=t};return e.length?(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(`instancedMesh`,{ref:i(0),args:[r.coeur,void 0,e.length],raycast:()=>{},children:(0,K.jsx)(`meshStandardMaterial`,{vertexColors:!0,roughness:1,metalness:0,onBeforeCompile:Mu,customProgramCacheKey:()=>`arbres-loin`})}),(0,K.jsx)(`instancedMesh`,{ref:i(1),args:[r.feuilles,void 0,e.length],raycast:()=>{},children:(0,K.jsx)(Fu,{feuillage:r.feuillage,graine:17})})]}):null}function qu({bouts:e}){let t=(0,U.useRef)(null),n=(0,U.useMemo)(()=>Uu(),[]);return(0,U.useLayoutEffect)(()=>()=>n.dispose(),[n]),(0,U.useLayoutEffect)(()=>{let n=t.current;if(!n)return;let r=new L,i=new A,a=new j(0,1,0);return e.forEach(([e,t,o,s,c],l)=>{i.setFromAxisAngle(a,s),r.compose(new j(e,t,o),i,new j(1,c,1)),n.setMatrixAt(l,r)}),n.instanceMatrix.needsUpdate=!0,n.computeBoundingSphere(),$l(n)},[e]),e.length?(0,K.jsx)(`instancedMesh`,{ref:e=>{Iu(e,t.current),t.current=e},args:[n,void 0,e.length],raycast:()=>{},children:(0,K.jsx)(`meshStandardMaterial`,{vertexColors:!0,roughness:1,metalness:0,onBeforeCompile:Mu,customProgramCacheKey:()=>`arbres-loin`})}):null}function Ju(e,t){let n=xl(31337),r=[];for(let i=0;i<e*40&&r.length<e;i++){let e=39+Math.sqrt(n())*(t-31-8),i=n()*Math.PI*2,a=Q.x+Math.cos(i)*e,o=Q.z+Math.sin(i)*e;if(al(a,o)<5)continue;let s=vl(a,o).bord;(s>1.5&&s<3.1||s<.3&&n()<.5)&&r.push([a,o,(s<.3?.14:.25)+n()*n()*.5,n()*Math.PI*2])}return r}function Yu(){let{rangs:e,bouts:t}=(0,U.useMemo)(()=>Br(`paysage:rangs`,Gu),[]),{pres:n,loin:r}=(0,U.useMemo)(()=>({pres:e.filter(e=>e[4]<Ru),loin:e.filter(e=>e[4]>=Ru)}),[e]),i=(0,U.useMemo)(()=>Ju(Xu?700:4200,Xu?110:200),[]);return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(Ku,{rangs:n,detail:1}),(0,K.jsx)(Ku,{rangs:r,detail:0}),(0,K.jsx)(qu,{bouts:t}),(0,K.jsx)(ed,{touffes:i,y:pl})]})}var Xu=B!==`haute`,Zu={bois:()=>[],masses:[{c:[0,.27,0],r:[.42,.3,.42]}],bas:`#3d4a3a`,haut:`#6c6388`,graine:23,feuilles:{forme:`aiguille`,tons:[`#454458`,`#62597c`,`#8a809f`],releve:[.6,1.25],profondeur:[-.2,.3]},taille:[[.34,.46],[.2,.28],[.2,.28]]};function Qu(){let e=(0,U.useRef)([null,null]),t=(0,U.useMemo)(()=>Vl(Xu),[]),n=(0,U.useMemo)(()=>Du(Zu,+!Xu),[]);(0,U.useLayoutEffect)(()=>()=>(n.coeur.dispose(),n.feuilles.dispose()),[n]),(0,U.useLayoutEffect)(()=>{let n=new L,r=new A,i=new j(0,1,0),a=new P,o=[];for(let s of e.current)s&&(t.forEach(([e,t,o],c)=>{r.setFromAxisAngle(i,c*2.4),n.compose(new j(e,0,t),r,new j(o,o*(.9+c*.618%1*.25),o)),s.setMatrixAt(c,n);let l=.85+c*.381%1*.3;s.setColorAt(c,a.setRGB(l,l*.97,l*(1+c*.27%1*.12)))}),s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0),s.computeBoundingSphere(),o.push($l(s)));return()=>o.forEach(e=>e())},[t]);let r=t=>n=>{Iu(n,e.current[t]),e.current[t]=n};return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(`instancedMesh`,{ref:r(0),args:[n.coeur,void 0,t.length],raycast:()=>{},receiveShadow:!0,castShadow:Sl,children:(0,K.jsx)(`meshStandardMaterial`,{vertexColors:!0,roughness:1,metalness:0,onBeforeCompile:Mu,customProgramCacheKey:()=>`arbres-loin`})}),(0,K.jsx)(`instancedMesh`,{ref:r(1),args:[n.feuilles,void 0,t.length],raycast:()=>{},receiveShadow:!0,children:(0,K.jsx)(Fu,{feuillage:n.feuillage,graine:23})})]})}function $u(){let e=xl(606),t=[],n=[],r=[],i=[],a=new P(`#3f4a22`),o=new P(`#8c7f48`),s=new P,c=Xu?9:12;for(let l=0;l<c;l++){let c=e()*Math.PI*2,l=.55+e()*.45,u=.2+e()*.7,d=.014+e()*.012,f=Math.cos(c),p=Math.sin(c),m=e()*.07,h=t.length/3;for(let c=0;c<=3;c++){let g=c/3,_=m+u*l*g*g*.6,v=l*(g-.22*u*g*g),y=d*(1-g*.9);for(let e of[-1,1])t.push(f*_-p*y*e,v,p*_+f*y*e),r.push(0,1,0);s.copy(a).lerp(o,g**.6).multiplyScalar(.85+e()*.3),n.push(s.r,s.g,s.b,s.r,s.g,s.b),c<3&&i.push(h+c*2,h+c*2+1,h+c*2+2,h+c*2+1,h+c*2+3,h+c*2+2)}}let l=new N;return l.setAttribute(`position`,new k(new Float32Array(t),3)),l.setAttribute(`normal`,new k(new Float32Array(r),3)),l.setAttribute(`color`,new k(new Float32Array(n),3)),l.setIndex(i),l}function ed({touffes:e,y:t}){let n=(0,U.useRef)(null),r=(0,U.useMemo)(()=>$u(),[]);return(0,U.useLayoutEffect)(()=>()=>r.dispose(),[r]),(0,U.useLayoutEffect)(()=>{let r=n.current;if(!r)return;let i=new L,a=new A,o=new j(0,1,0),s=new P;return e.forEach(([e,n,c,l],u)=>{a.setFromAxisAngle(o,l),i.compose(new j(e,t?t(e,n):0,n),a,new j(c*1.5,c,c*1.5)),r.setMatrixAt(u,i);let d=u*.618%1;r.setColorAt(u,s.setRGB(.85+d*.4,.95+d*.1,.8-d*.25))}),r.instanceMatrix.needsUpdate=!0,r.instanceColor&&(r.instanceColor.needsUpdate=!0),r.computeBoundingSphere(),$l(r)},[e,t]),e.length?(0,K.jsx)(`instancedMesh`,{ref:e=>{Iu(e,n.current),n.current=e},args:[r,void 0,e.length],raycast:()=>{},receiveShadow:!0,children:(0,K.jsx)(`meshStandardMaterial`,{vertexColors:!0,roughness:1,metalness:0,side:2})}):null}function td(){let e=(0,U.useMemo)(()=>Hl(Xu?900:3200),[]);return(0,K.jsx)(ed,{touffes:e})}var nd=[[-22.5,-15,1.25,2.1],[-23.5,6,1.05,4.6],[16,-15.5,1.15,.7],[17.5,4.5,.95,3.3],[-19,33,1.2,5.4],[15.5,35,1.1,1.6],[-24,22,.9,2.9]];function rd(){let e=B===`haute`?nd.length:4;return(0,K.jsx)(K.Fragment,{children:nd.slice(0,e).map(([e,t,n,r],i)=>(0,K.jsx)(Ji,{graine:31+i*2,position:[e,0,t],scale:n,rotation:[0,r,0],allege:!0},i))})}var id={pin:[3.4,6.3],cypres:[.85,4.2],buisson:[1.4,.5],olivier:[2.1,2.8],chene:[2.9,3.4]},ad={vertexShader:`
    attribute vec3 aPied;
    attribute vec3 aSol;     // normale du terrain au pied de l'arbre
    attribute vec2 aGabarit; // rayon du houppier, hauteur de son centre
    uniform vec3 uVers;      // direction horizontale opposée à l'astre
    uniform float uLong;     // longueur d'ombre par mètre de hauteur
    varying vec2 vUv;
    varying float vDist;
    void main() {
      vec3 t = normalize(uVers - aSol * dot(uVers, aSol));
      vec3 b = cross(aSol, t);
      float l = aGabarit.y * uLong;
      vec2 q = position.xy * 2.0;
      // ellipse couchée sur le terrain, étirée du pied de l'arbre vers l'ombre de son houppier
      vec3 p = aPied + aSol * 0.14 + t * (l * 0.5 + q.x * (aGabarit.x + l * 0.5)) + b * q.y * aGabarit.x;
      vUv = q;
      vec4 v = viewMatrix * vec4(p, 1.0);
      vDist = -v.z;
      gl_Position = projectionMatrix * v;
    }`,fragmentShader:`
    uniform float uForce;
    uniform float uBrume;
    varying vec2 vUv;
    varying float vDist;
    void main() {
      float a = (1.0 - smoothstep(0.35, 1.0, length(vUv))) * uForce;
      // l'ombre s'efface dans la brume lointaine, comme le reste
      a *= exp(-uBrume * uBrume * vDist * vDist);
      gl_FragColor = vec4(0.02, 0.03, 0.05, a);
    }`};function od({plants:e}){let t=(0,U.useMemo)(()=>{let t=Object.keys(e).flatMap(t=>e[t].map(e=>[t,e])),n=new Float32Array(t.length*3),r=new Float32Array(t.length*3),i=new Float32Array(t.length*2),a=new j;t.forEach(([e,[t,o,s,c]],l)=>{n.set([t,o+.15,s],l*3),a.set(pl(t-1.5,s)-pl(t+1.5,s),3,pl(t,s-1.5)-pl(t,s+1.5)).normalize(),r.set([a.x,a.y,a.z],l*3),i.set([id[e][0]*c,id[e][1]*c],l*2)});let o=new se,s=new ze(1,1);o.index=s.index,o.setAttribute(`position`,s.attributes.position),o.setAttribute(`aPied`,new re(n,3)),o.setAttribute(`aSol`,new re(r,3)),o.setAttribute(`aGabarit`,new re(i,2)),o.instanceCount=t.length;let c=new M({...ad,uniforms:{uVers:{value:new j(1,0,0)},uLong:{value:1},uForce:{value:.5},uBrume:{value:55e-5}},transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),l=new je(o,c);return l.frustumCulled=!1,l.raycast=()=>{},l.renderOrder=-1,l},[e]);return(0,U.useLayoutEffect)(()=>(Bn.add(t),()=>{Bn.delete(t),t.geometry.dispose(),t.material.dispose()}),[t]),I(()=>{let e=t.material.uniforms,n=G.lumiere,r=Math.hypot(n.x,n.z)||1;e.uVers.value.set(-n.x/r,0,-n.z/r),e.uLong.value=Math.min(r/Math.max(n.y,.05),3.2),e.uForce.value=.62*Math.min(1,G.intensite/3),du.value.set(e.uVers.value.x*e.uLong.value,e.uVers.value.z*e.uLong.value,Math.min(1,G.intensite/3))}),(0,K.jsx)(`primitive`,{object:t})}function sd(){let e=(0,U.useMemo)(()=>Br(`paysage:semis`,ku),[]),{toutPres:t,proches:n,loin:r}=(0,U.useMemo)(()=>ju(e),[e]),{domaine:i,autour:a,sansDomaine:o}=(0,U.useMemo)(()=>{let n=(e,t)=>Object.fromEntries(Object.keys(e).map(n=>[n,e[n].filter(([e,,n])=>Sl&&al(e,n)<0===t)]));return Sl?{domaine:n(t,!0),autour:n(t,!1),sansDomaine:n(e,!1)}:{domaine:null,autour:t,sansDomaine:e}},[e,t]);return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(fu,{}),(0,K.jsx)(hu,{}),(0,K.jsx)(od,{plants:o}),i&&(0,K.jsx)(Lu,{plants:i,detail:2,ombres:!0}),Au>0&&(0,K.jsx)(Lu,{plants:a,detail:2}),(0,K.jsx)(Lu,{plants:n,detail:1}),(0,K.jsx)(Lu,{plants:r,detail:0}),Xt(`vignes`)&&(0,K.jsx)(Yu,{}),(!$r||B!==`haute`)&&(0,K.jsx)(rd,{}),Xt(`domaine`)&&(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(au,{}),(0,K.jsx)(Qu,{}),(0,K.jsx)(td,{})]})]})}var cd=new Set,ld=e=>t=>{t&&(t.userData.lueur=e,cd.add(t))},ud=.4,dd=.085,fd=.07,pd=.035,md=.42,hd=.022,gd=12;function _d(e){let t=(e%ud+ud)%ud,n=Math.min(t,ud-t),r=fd*Math.sqrt(Math.max(0,1-(n/dd)**2)),i=pd*(Math.abs(t-ud/2)/.15)**2;return r>=i?[r,!0]:[Math.min(i,pd*1.6),!1]}function vd(e,t,n){let r=Math.imul(e,374761393)+Math.imul(t,668265263)+Math.imul(n,2147483647)|0;return r=Math.imul(r^r>>>13,1274126177),((r^r>>>16)>>>0)/4294967296}var yd=[`#b8603c`,`#c46f47`,`#a85232`,`#b96f4b`,`#9c4a2d`,`#c98058`].map(e=>new P(e)),bd=new P(`#b7a868`);function xd(e,t,n){let r=Math.ceil(e/ud*gd),i=Array.from({length:r+1},(t,n)=>-e/2+n*e/r),a=i.map(_d),o=Math.ceil(t/md),s=[],c=[],l=[],u=[],d=new P,f=(e,t,n)=>{let[r,o]=a[e],s=Math.floor((i[e]+ud/2)/ud)*2+ +!o,c=vd(s,t,1);return d.copy(yd[Math.floor(c*yd.length)]).multiplyScalar(.88+vd(s,t,2)*.24),o&&vd(s,t,3)<.1&&d.lerp(bd,.25+vd(s,t,4)*.3),o?d.multiplyScalar(.9+r/fd*.1):d.multiplyScalar(.62+.38*Math.min(1,r/pd)),d.multiplyScalar(n)},p=(e,t,o,u)=>{let p=s.length/3;for(let p=0;p<=r;p++)s.push(i[p],n+.004+a[p][0]+t,e),f(p,o,u),c.push(d.r,d.g,d.b),l.push(i[p],e);return p},m=(e,t)=>{for(let n=0;n<r;n++)u.push(e+n,e+n+1,t+n,e+n+1,t+n+1,t+n)};for(let e=0;e<o;e++){let n=-t/2+e*md;m(p(Math.min(t/2,n+md),0,e,.72),p(n,hd,e,1)),m(p(n,hd,e,.55),p(n,e===0?-.03900000000000001:0,e,e===0?.3:.45))}let h=new N;return h.setAttribute(`position`,new k(new Float32Array(s),3)),h.setAttribute(`color`,new k(new Float32Array(c),3)),h.setAttribute(`uv`,new k(new Float32Array(l),2)),h.setIndex(u),h.computeVertexNormals(),h}function Sd(e,t=.15){let n=Math.max(1,Math.round(e/.4)),r=e/n,i=[],a=[],o=[],s=new P,c=(e,t,n,r)=>{let o=i.length/3;s.copy(yd[Math.floor(vd(n,7,1)*yd.length)]).multiplyScalar((.88+vd(n,7,2)*.24)*r),vd(n,7,3)<.12&&s.lerp(bd,.3);for(let n=0;n<=10;n++){let r=n/10*Math.PI;i.push(e,t*Math.sin(r),t*Math.cos(r)),a.push(s.r,s.g,s.b)}return o},l=(e,t)=>{for(let n=0;n<10;n++)o.push(e+n,t+n,e+n+1,e+n+1,t+n,t+n+1)};for(let i=0;i<n;i++){let a=-e/2+i*r,o=a+r;l(c(a,t*.94,i,.8),c(o,t*1.06,i,1)),l(c(o,t*1.06,i,.6),c(o,t*(i===n-1?.2:.94),i,.45))}let u=c(-e/2,t*.94,0,.6);l(c(-e/2,t*.2,0,.45),u);let d=new N;return d.setAttribute(`position`,new k(new Float32Array(i),3)),d.setAttribute(`color`,new k(new Float32Array(a),3)),d.setIndex(o),d.computeVertexNormals(),d}var Cd=new Map;function wd(e){let t=e>>>0||1;return()=>(t^=t<<13,t^=t>>>17,t^=t<<5,(t>>>0)/4294967296)}function Td(e,t){let n=wd(t),r=Array.from({length:e*e},n),i=(t,n)=>r[(n%e+e)%e*e+(t%e+e)%e];return(e,t)=>{let n=Math.floor(e),r=Math.floor(t),a=e-n,o=t-r,s=a*a*(3-2*a),c=o*o*(3-2*o),l=i(n,r)+(i(n+1,r)-i(n,r))*s;return l+(i(n,r+1)+(i(n+1,r+1)-i(n,r+1))*s-l)*c}}function Ed(e,t,n,r){let i=new Uint8Array(t*n*4),a=(r,i)=>e[(i+n)%n*t+(r+t)%t];for(let e=0;e<n;e++)for(let n=0;n<t;n++){let o=(a(n+1,e)-a(n-1,e))*r,s=(a(n,e+1)-a(n,e-1))*r,c=Math.hypot(o,s,1),l=(e*t+n)*4;i[l]=-o/c*127+128,i[l+1]=s/c*127+128,i[l+2]=1/c*127+128,i[l+3]=255}let o=l(new Qe(i,t,n));return o.wrapS=o.wrapT=Ke,o.flipY=!0,o.needsUpdate=!0,o}function Dd(e,t){let n=document.createElement(`canvas`);return n.width=e,n.height=t,{c:n,g:n.getContext(`2d`)}}function Od(e,t=!0){let n=new qe(e);return n.wrapS=n.wrapT=Ke,n.anisotropy=d,t&&(n.colorSpace=it),n}function kd(e,t,n){let r=e.clone();return r.repeat.set(t,n),r.needsUpdate=!0,r}function Ad(){if(Cd.has(`tuiles`))return Cd.get(`tuiles`);let{c:e,g:t}=Dd(512,512),n=t.createImageData(512,512),r=new Float32Array(262144),i=wd(5),a=Array.from({length:32},()=>{let e=i(),t=e<.42?[190,96,60]:e<.72?[208,124,82]:e<.9?[166,82,56]:[184,128,92],n=.86+i()*.26;return t.map(e=>e*n)}),o=Td(24,9),s=Td(6,13);for(let e=0;e<512;e++)for(let t=0;t<512;t++){let i=Math.floor(t/64),c=Math.floor(e/128),l=t%64/64,u=e%128/128,d=i%2==0,f=Math.sin(l*Math.PI),p=d?.45+f*.55:.25-f*.2;p+=u<.08?(.08-u)*3:0,r[e*512+t]=p;let[m,h,g]=a[c*8+i],_=d?.62+f*.48:.42+(1-f)*.25;u<.12&&(_*=.62+u*3.1),_*=.88+s(t/85,e/85)*.22;let v=o(t/21,e/21),y=(e*512+t)*4,b=m*_,x=h*_,S=g*_;if(v>.78&&d){let e=Math.min(1,(v-.78)*9);b+=(196-b)*e*.55,x+=(176-x)*e*.55,S+=(120-S)*e*.55}n.data[y]=Math.min(255,b),n.data[y+1]=Math.min(255,x),n.data[y+2]=Math.min(255,S),n.data[y+3]=255}t.putImageData(n,0,0);let c={map:Od(e),normal:Ed(r,512,512,9)};return Cd.set(`tuiles`,c),c}function jd(){if(Cd.has(`genoise`))return Cd.get(`genoise`);let{c:e,g:t}=Dd(128,64);t.fillStyle=`#e9dfcc`,t.fillRect(0,0,128,64);for(let e=0;e<2;e++){let n=e*64+32,r=t.createRadialGradient(n,40,4,n,40,30);r.addColorStop(0,`#6a4232`),r.addColorStop(.6,`#8a4d33`),r.addColorStop(.62,`#b8653f`),r.addColorStop(.95,`#a85a38`),r.addColorStop(1,`#e9dfcc`),t.fillStyle=r,t.beginPath(),t.arc(n,40,28,Math.PI,0),t.lineTo(n+28,64),t.lineTo(n-28,64),t.closePath(),t.fill()}let n=t.createLinearGradient(0,0,0,14);n.addColorStop(0,`rgba(50,35,25,0.55)`),n.addColorStop(1,`rgba(50,35,25,0)`),t.fillStyle=n,t.fillRect(0,0,128,14);let r={map:Od(e)};return Cd.set(`genoise`,r),r}function Md(){if(Cd.has(`crepi`))return Cd.get(`crepi`);let{c:e,g:t}=Dd(256,256),n=t.createImageData(256,256),r=Td(5,21),i=Td(13,22),a=Td(41,23);for(let e=0;e<256;e++)for(let t=0;t<256;t++){let o=.9+(r(t/51.2,e/51.2)*.55+i(t/19.7,e/19.7)*.3+a(t/6.24,e/6.24)*.15)*.2,s=(e*256+t)*4;n.data[s]=255*o,n.data[s+1]=252*o,n.data[s+2]=246*o,n.data[s+3]=255}t.putImageData(n,0,0);let o=new Float32Array(16384),s=Td(16,31),c=Td(64,32),l=Td(32,33);for(let e=0;e<128;e++)for(let t=0;t<128;t++){let n=c(t/2,e/2),r=s(t/8,e/8);o[e*128+t]=n*.55+r*.5+(l(t/4,e/4)>.82?.25:0)}let u={map:Od(e),normal:Ed(o,128,128,2.2)};return Cd.set(`crepi`,u),u}function Nd(){if(Cd.has(`persienne`))return Cd.get(`persienne`);let{c:e,g:t}=Dd(64,256),n=t.createImageData(64,256),r=new Float32Array(16384),i=Td(8,41);for(let e=0;e<256;e++)for(let t=0;t<64;t++){let a=t<6||t>57||e<8||e>247,o=e%11/11,s,c;a?(s=.95,c=1):(s=.58+(1-o)*.5,c=.3+(1-o)*.5),s*=.96+i(t/8,e/8)*.05;let l=(e*64+t)*4;n.data[l]=n.data[l+1]=n.data[l+2]=Math.min(255,255*s),n.data[l+3]=255,r[e*64+t]=c}t.putImageData(n,0,0);let a={map:Od(e),normal:Ed(r,64,256,4)};return Cd.set(`persienne`,a),a}function Pd(){if(Cd.has(`planches`))return Cd.get(`planches`);let{c:e,g:t}=Dd(128,256),n=t.createImageData(128,256),r=new Float32Array(32768),i=Td(16,51);for(let e=0;e<256;e++)for(let t=0;t<128;t++){let a=t%(128/5)/(128/5),o=a<.05||a>.95,s=e>34&&e<52||e>200&&e<218,c=i(t/3+Math.floor(t/(128/5))*3.1,e/40),l=.82+c*.18,u=.5+c*.08;o&&!s&&(l*=.45,u=.1),s&&(l*=1.05,u=.8);let d=(e*128+t)*4;n.data[d]=n.data[d+1]=n.data[d+2]=Math.min(255,255*l),n.data[d+3]=255,r[e*128+t]=u}t.putImageData(n,0,0);let a={map:Od(e),normal:Ed(r,128,256,3)};return Cd.set(`planches`,a),a}function Fd(){if(Cd.has(`interieur`))return Cd.get(`interieur`);let{c:e,g:t}=Dd(128,256),n=t.createLinearGradient(0,0,0,256);n.addColorStop(0,`#3a3530`),n.addColorStop(.6,`#1d1a18`),n.addColorStop(1,`#141210`),t.fillStyle=n,t.fillRect(0,0,128,256),t.fillStyle=`rgba(70,58,48,0.8)`,t.fillRect(40,170,50,60),t.fillStyle=`rgba(120,105,90,0.35)`,t.fillRect(52,70,26,34);for(let[e,n]of[[0,24],[104,128]])for(let r=e;r<n;r++){let i=(.84+.16*Math.sin((r-e)*.42))*(e===0?1-(r-e)/60:1-(n-r)/60)*.82;t.fillStyle=`rgb(${Math.round(200*i)},${Math.round(188*i)},${Math.round(166*i)})`,t.fillRect(r,0,1,256)}let r={map:Od(e)};return Cd.set(`interieur`,r),r}var Id=`#e8d2a8`,Ld=`#c4b394`,Rd=`#ddd0b5`,zd=`#f0ebe0`,Bd=`#86a2ba`,Vd=`#5f7564`,Hd=`#a95c3b`,Ud=`#e6dccb`,Wd=`#d8ccb4`,Gd=Ut!==`basse`,Kd=.03,qd=.55;function Jd(e,t,n){let r=new xe(e,t,n),i=r.attributes.position,a=r.attributes.normal,o=r.attributes.uv;for(let e=0;e<i.count;e++){let t=i.getX(e),n=i.getY(e),r=i.getZ(e);Math.abs(a.getY(e))>.5?o.setXY(e,t,r):Math.abs(a.getX(e))>.5?o.setXY(e,r,n):o.setXY(e,t,n)}return r}function Yd(e,t,n,r,i,a){let o=Jd(t-e,r-n,a-i);return o.translate((e+t)/2,(n+r)/2,(i+a)/2),o}function Xd(e){e.vertexShader=`varying float vHautM;
`+e.vertexShader.replace(`#include <project_vertex>`,`#include <project_vertex>
  vHautM = (modelMatrix * vec4(transformed, 1.0)).y;`),e.fragmentShader=`varying float vHautM;
`+e.fragmentShader.replace(`#include <map_fragment>`,`#include <map_fragment>
      diffuseColor.rgb *= 1.0 - (1.0 - smoothstep(0.5, 1.5, vHautM)) * 0.14;`)}function Zd(){return(0,U.useMemo)(()=>{let e=Md(),t=Ad(),n=Nd(),r=Pd();return{crepi:{map:kd(e.map,1/4,1/4),normalMap:kd(e.normal,2,2)},tuiles:t,genoise:jd().map,persienne:n,planches:r,interieur:Fd().map,pierre:_(3,3)}},[])}var Qd=({m:e})=>(0,K.jsx)(`meshStandardMaterial`,{color:Id,map:e.crepi.map,normalMap:e.crepi.normalMap,normalScale:[.9,.9],roughness:.93,onBeforeCompile:Xd,customProgramCacheKey:()=>`crepi-maison`}),$d=({m:e,couleur:t=Rd})=>(0,K.jsx)(`meshStandardMaterial`,{color:t,normalMap:e.pierre,normalScale:[1.4,1.4],roughness:.9});function ef({t:e,m:t}){let{x0:n,x1:r,z0:i,z1:a,egout:o,hauteur:s,debord:c=.45,rive:l=.22,pignons:u}=e,d=(0,U.useMemo)(()=>{let e=(i+a)/2,d=s/(e-i),f=Math.atan(d),p=.14,m=r-n+2*l,h=(e-i+c)/Math.cos(f)+.08,g=e=>{let t=e?1:-1,s=e?i-c+h/2*Math.cos(f):a+c-h/2*Math.cos(f),l=o-c*d+h/2*Math.sin(f);return{pos:[(n+r)/2,l+p/2*Math.cos(f),s-p/2*t*Math.sin(f)],rot:-t*f}},_=new xe(m,p,h),v=Gd?Br(`maison:tuiles:${m.toFixed(3)}:${h.toFixed(3)}`,()=>xd(m,h,p/2)):null,y=v?.clone().rotateY(Math.PI)??null,b={map:kd(t.tuiles.map,m/1.76,h/1.6),normalMap:kd(t.tuiles.normal,m/1.76,h/1.6)},x=new E([new F(-i,o),new F(-e,o+s),new F(-a,o)]),S=e=>{let t=new D(x,{depth:.25,bevelEnabled:!1});return t.rotateY(Math.PI/2),t.translate(e,0,0),t},C=u.flatMap((e,t)=>e?[S(t===0?n:r-.25)]:[]),w=[[.17,.1,.34],[.27,.09,.23],[.36,.08,.12]].flatMap(([e,t,s])=>[1,-1].map(c=>{let l=c>0?i:a,u=new xe(r-n,t,s+.03);return u.translate((n+r)/2,o-e-t/2,l-c*(s/2-.015)),u})),T=new Ae(.115,.115,m,14);return T.rotateZ(Math.PI/2),T.translate((n+r)/2,o+s+p/Math.cos(f)-.045,e),{pans:[g(!0),g(!1)],geoPan:_,tuiles:[v,y],tex:b,pignons:C.length?J(C):null,genoise:J(w,!0),genoiseTex:kd(t.genoise,(r-n)/.34,1),faitage:T}},[n,r,i,a,o,s,c,l,u,t]);return(0,K.jsxs)(`group`,{children:[d.pans.map((e,t)=>(0,K.jsxs)(`mesh`,{geometry:d.geoPan,position:e.pos,rotation:[e.rot,0,0],castShadow:!0,receiveShadow:!0,children:[(0,K.jsx)(`meshStandardMaterial`,{attach:`material-0`,color:Hd,roughness:.85}),(0,K.jsx)(`meshStandardMaterial`,{attach:`material-1`,color:Hd,roughness:.85}),Gd?(0,K.jsx)(`meshStandardMaterial`,{attach:`material-2`,color:`#5a2e1d`,roughness:.9}):(0,K.jsx)(`meshStandardMaterial`,{attach:`material-2`,map:d.tex.map,normalMap:d.tex.normalMap,normalScale:[1.1,1.1],roughness:.82}),(0,K.jsx)(`meshStandardMaterial`,{attach:`material-3`,color:Wd,roughness:.95}),(0,K.jsx)(`meshStandardMaterial`,{attach:`material-4`,color:Hd,roughness:.85}),(0,K.jsx)(`meshStandardMaterial`,{attach:`material-5`,color:Hd,roughness:.85})]},t)),d.pans.map((e,n)=>d.tuiles[n]&&(0,K.jsx)(`mesh`,{geometry:d.tuiles[n],position:e.pos,rotation:[e.rot,0,0],castShadow:!0,receiveShadow:!0,children:(0,K.jsx)(`meshStandardMaterial`,{vertexColors:!0,normalMap:t.pierre,normalScale:[.5,.5],roughness:.8})},`t${n}`)),d.pignons&&(0,K.jsx)(`mesh`,{geometry:d.pignons,castShadow:!0,receiveShadow:!0,children:(0,K.jsx)(Qd,{m:t})}),(0,K.jsx)(`mesh`,{geometry:d.genoise,castShadow:!0,receiveShadow:!0,children:(0,K.jsx)(`meshStandardMaterial`,{color:Ud,map:d.genoiseTex,roughness:.9})}),(0,K.jsx)(`mesh`,{geometry:d.faitage,castShadow:!0,children:(0,K.jsx)(`meshStandardMaterial`,{color:Hd,normalMap:t.pierre,roughness:.85})})]})}function tf({o:e,m:t}){let{x:n,y0:r,l:i,h:a,z:o=19,porte:s=!1,volets:c=!0,eclairee:l=0}=e,u=.13,d=r<.5,f=(0,U.useMemo)(()=>{let e=J([Yd(-i/2-u,-i/2,d?-.04:-.02,a+u,-.1,.02),Yd(i/2,i/2+u,d?-.04:-.02,a+u,-.1,.02),Yd(-i/2-u,i/2+u,a,a+u,-.1,.02),...d?[]:[Yd(-i/2-u-.06,i/2+u+.06,-.08,-.01,-.17,.03)]]),t=.055,n=[Yd(-i/2,-i/2+t,0,a,-.068,-.04),Yd(i/2-t,i/2,0,a,-.068,-.04),Yd(-i/2,i/2,a-t,a,-.068,-.04),Yd(-i/2,i/2,0,t*(d?2:1),-.068,-.04)];if(!s){n.push(Yd(-.03,.03,0,a,-.072,-.04));let e=a>1.8?4:3;for(let t=1;t<e;t++)n.push(Yd(-i/2,i/2,a*t/e-.016,a*t/e+.016,-.064,-.045))}return{cadre:e,menuiserie:J(n)}},[i,a,d,s]),p=i/2+.02;return(0,K.jsxs)(`group`,{position:[n,r,o],children:[(0,K.jsx)(`mesh`,{geometry:f.cadre,castShadow:!0,receiveShadow:!0,children:(0,K.jsx)($d,{m:t})}),s?(0,K.jsxs)(`mesh`,{position:[0,a/2,-.035],castShadow:!0,children:[(0,K.jsx)(`boxGeometry`,{args:[i,a,.05]}),(0,K.jsx)(`meshStandardMaterial`,{color:Vd,map:t.planches.map,normalMap:t.planches.normal,roughness:.6})]}):(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(`mesh`,{position:[0,a/2,-.045],children:[(0,K.jsx)(`boxGeometry`,{args:[i,a,.02]}),(0,K.jsx)(`meshPhysicalMaterial`,{ref:ld(l),map:t.interieur,roughness:.7,metalness:0,clearcoat:1,clearcoatRoughness:.03,emissive:`#ffb866`,emissiveMap:t.interieur,emissiveIntensity:0,userData:{keepEmissive:!0}})]}),(0,K.jsx)(`mesh`,{geometry:f.menuiserie,castShadow:!0,children:(0,K.jsx)(`meshStandardMaterial`,{color:zd,roughness:.5})})]}),s&&(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(`mesh`,{position:[i/2-.12,a*.48,-.075],rotation:[Math.PI/2,0,0],children:[(0,K.jsx)(`cylinderGeometry`,{args:[.018,.018,.06,10]}),(0,K.jsx)(`meshStandardMaterial`,{color:`#2a2826`,metalness:.8,roughness:.35})]}),(0,K.jsxs)(`mesh`,{position:[0,-.03,-.2],castShadow:!0,receiveShadow:!0,children:[(0,K.jsx)(`boxGeometry`,{args:[i+2*u+.2,.06,.44]}),(0,K.jsx)($d,{m:t,couleur:`#c4b394`})]})]}),c&&[1,-1].map(e=>(0,K.jsxs)(`group`,{position:[e*(i/2+u),a/2,-.045],rotation:[0,e*.12,0],children:[(0,K.jsxs)(`mesh`,{position:[e*p/2,0,-.018],castShadow:!0,receiveShadow:!0,children:[(0,K.jsx)(`boxGeometry`,{args:[p,a+.03,.035]}),(0,K.jsx)(`meshStandardMaterial`,{color:Bd,map:t.persienne.map,normalMap:t.persienne.normal,roughness:.7})]}),[-.36,.36].map(t=>(0,K.jsxs)(`mesh`,{position:[e*p/2,t*a,-.04],children:[(0,K.jsx)(`boxGeometry`,{args:[p*.82,.035,.008]}),(0,K.jsx)(`meshStandardMaterial`,{color:`#26282a`,roughness:.6,metalness:.5})]},t))]},e))]})}function nf({x:e,y:t=2.45,z:n=19}){return(0,K.jsxs)(`group`,{position:[e,t,n-.08],children:[(0,K.jsxs)(`mesh`,{children:[(0,K.jsx)(`boxGeometry`,{args:[.13,.24,.12]}),(0,K.jsx)(`meshStandardMaterial`,{ref:ld(5),color:`#f4e7cf`,roughness:.4,emissive:`#ffb866`,emissiveIntensity:0,userData:{keepEmissive:!0}})]}),(0,K.jsxs)(`mesh`,{position:[0,.15,0],children:[(0,K.jsx)(`boxGeometry`,{args:[.17,.05,.16]}),(0,K.jsx)(`meshStandardMaterial`,{color:`#2a2b2d`,roughness:.6})]}),(0,K.jsxs)(`mesh`,{position:[0,-.02,.06],children:[(0,K.jsx)(`boxGeometry`,{args:[.06,.06,.02]}),(0,K.jsx)(`meshStandardMaterial`,{color:`#2a2b2d`,roughness:.6})]})]})}function rf(e,t,n,r,i){let a=[],o=0;for(let s=r;s+.28<=i;s+=.3,o++){let r=o%2==0,i=r?.46:.26,c=r?.26:.46,l=e-.02*n,u=e+i*n;a.push(Yd(Math.min(l,u),Math.max(l,u),s,s+.28,t-.02,t+c))}return a}function af({c:e,m:t,angles:n}){let r=(0,U.useMemo)(()=>{let{x0:t,x1:r,z0:i,z1:a,egout:o}=e;return{murs:Yd(t,r,0,o,i,a),soubassement:Yd(t-Kd,r+Kd,0,qd,i-Kd,a+Kd),chaines:n.length?J(n.flatMap(([e,t])=>rf(e,i,t,.5700000000000001,o-.5))):null}},[e,n]);return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(`mesh`,{geometry:r.murs,castShadow:!0,receiveShadow:!0,children:(0,K.jsx)(Qd,{m:t})}),(0,K.jsx)(`mesh`,{geometry:r.soubassement,receiveShadow:!0,children:(0,K.jsx)($d,{m:t,couleur:Ld})}),r.chaines&&(0,K.jsx)(`mesh`,{geometry:r.chaines,castShadow:!0,receiveShadow:!0,children:(0,K.jsx)($d,{m:t})})]})}var of={x0:-11,x1:3,z0:19,z1:27,egout:5.8},sf={x0:3,x1:8.6,z0:20.4,z1:27,egout:3.1},cf={...of,hauteur:1.7,pignons:[!0,!0]},lf={...sf,hauteur:1.15,pignons:[!1,!0]},uf=[[of.x0,1],[of.x1,-1]],df=[[sf.x1,-1]],ff=[{x:-8.6,y0:.2,l:1.3,h:2.2,eclairee:1.6},{x:.6,y0:.2,l:1.3,h:2.2,eclairee:2.2},{x:-4,y0:.23,l:1.1,h:2.2,porte:!0,volets:!1},{x:-8.6,y0:3.55,l:1,h:1.3},{x:-4,y0:3.55,l:1,h:1.3,eclairee:1.4},{x:.6,y0:3.55,l:1,h:1.3},{x:5.8,y0:.2,l:2.9,h:2.15,z:20.4,eclairee:2.4,volets:!1}];function pf({m:e}){return(0,K.jsxs)(`group`,{position:[-8.2,0,24.4],children:[(0,K.jsxs)(`mesh`,{position:[0,7.25,0],castShadow:!0,receiveShadow:!0,children:[(0,K.jsx)(`boxGeometry`,{args:[.72,2.1,.72]}),(0,K.jsx)(Qd,{m:e})]}),(0,K.jsxs)(`mesh`,{position:[0,8.34,0],castShadow:!0,children:[(0,K.jsx)(`boxGeometry`,{args:[.9,.08,.9]}),(0,K.jsx)($d,{m:e})]}),(0,K.jsxs)(`mesh`,{position:[0,8.55,0],rotation:[0,Math.PI/4,0],castShadow:!0,children:[(0,K.jsx)(`coneGeometry`,{args:[.6,.34,4]}),(0,K.jsx)(`meshStandardMaterial`,{color:Hd,roughness:.85})]})]})}function mf(){let e=Zd();return(0,K.jsxs)(`group`,{children:[(0,K.jsx)(af,{c:of,m:e,angles:uf}),(0,K.jsx)(af,{c:sf,m:e,angles:df}),(0,K.jsx)(ef,{t:cf,m:e}),(0,K.jsx)(ef,{t:lf,m:e}),(0,K.jsx)(pf,{m:e}),ff.map((t,n)=>(0,K.jsx)(tf,{o:t,m:e},n)),(0,K.jsx)(nf,{x:-5.05}),(0,K.jsx)(nf,{x:-2.95}),(0,K.jsx)(nf,{x:3.75,z:20.4,y:2.35})]})}var hf=.35,gf=.5,_f=El.h+.32,vf=7.5;function yf(e,t,n,r,i,a){let o=Jd(e,t,n);return o.translate(r,i,a),o}function bf([e,t,n,r]){let i=Math.hypot(n-e,r-t),a=(n-e)/i,o=(r-t)/i;return{L:i,ux:a,uz:o,m:new L().compose(new j(e,0,t),new A().setFromEuler(new nt(0,Math.atan2(-o,a),0)),new j(1,1,1))}}function xf(){let e=[],t=(t,n)=>{e.some(([e,r])=>Math.hypot(e-t,r-n)<.3)||e.push([t,n])};for(let e of kl){let[n,r]=e,{L:i,ux:a,uz:o}=bf(e),s=Math.ceil(i/vf);for(let e=0;e<=s;e++)t(n+i*e*a/s,r+i*e*o/s)}return e}function Sf(){return(0,U.useMemo)(()=>{let e=[],t=[],n=[],r=[];for(let i of kl){let{L:a,m:o}=bf(i),s=e=>e.applyMatrix4(o);e.push(s(yf(a,El.h-hf,El.e,a/2,hf+(El.h-hf)/2,0))),t.push(s(yf(a,hf,El.e+.05,a/2,hf/2,0))),n.push(s(yf(a,.05,El.e+.07,a/2,El.h+.025,0))),r.push(s(Sd(a,.15).translate(a/2,El.h+.05,0)))}let i=xf(),a=[];for(let[n,r]of i){e.push(yf(gf,_f-hf,gf,n,hf+(_f-hf)/2,r)),t.push(yf(.55,hf,.55,n,hf/2,r)),t.push(yf(.64,.08,.64,n,_f+.04,r));let i=new Ge(.43,.3,4,1);i.rotateY(Math.PI/4),i.translate(n,_f+.08+.15,r),a.push(i)}return{crepi:J(e),pierre:J(t),mortier:J(n),tuiles:J(r),chapeaux:J(a)}},[])}function Cf(){let e=Sf(),t=(0,U.useMemo)(()=>{let e=Md();return{map:kd(e.map,1/4,1/4),normalMap:kd(e.normal,2,2),pierre:_(3,3)}},[]);return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(`mesh`,{geometry:e.crepi,castShadow:!0,receiveShadow:!0,children:(0,K.jsx)(`meshStandardMaterial`,{color:Id,map:t.map,normalMap:t.normalMap,normalScale:[.9,.9],roughness:.93,onBeforeCompile:Xd,customProgramCacheKey:()=>`crepi-maison`})}),(0,K.jsx)(`mesh`,{geometry:e.pierre,castShadow:!0,receiveShadow:!0,children:(0,K.jsx)(`meshStandardMaterial`,{color:Ld,normalMap:t.pierre,normalScale:[1.4,1.4],roughness:.9})}),(0,K.jsx)(`mesh`,{geometry:e.mortier,receiveShadow:!0,children:(0,K.jsx)(`meshStandardMaterial`,{color:Ud,normalMap:t.pierre,roughness:.95})}),(0,K.jsx)(`mesh`,{geometry:e.tuiles,castShadow:!0,receiveShadow:!0,children:(0,K.jsx)(`meshStandardMaterial`,{vertexColors:!0,normalMap:t.pierre,normalScale:[.5,.5],roughness:.8})}),(0,K.jsx)(`mesh`,{geometry:e.chapeaux,castShadow:!0,children:(0,K.jsx)(`meshStandardMaterial`,{color:Hd,normalMap:t.pierre,roughness:.85})})]})}var wf=[2.62,3.21,3.33];function Tf(){let e=($.x0+$.x1)/2,t=($.z0+$.z1)/2,n=[],r=0;for(let i of kl){let{L:a,ux:o,uz:s}=bf(i),c=-s*(e-i[0])+o*(t-i[1])<0?-1:1,l=-s*c,u=o*c;for(let e=1.9;e<a-1.5;e+=3.4){r++;let t=r%3==0?-1:1,a=[0,1,0,2][r%4],c=l*t,d=u*t,f=i[0]+o*e+c*(El.e/2),p=i[1]+s*e+d*(El.e/2);n.push({modele:a,pos:[f,0,p],tour:Math.atan2(c,d),k:(El.h-.04-r%2*.25)/wf[a]})}}return n}function Ef(){let{scene:e}=u(`/agr-piscine-confidentialite/demo-3d/models/decor/lierre-mur.glb`),t=(0,U.useMemo)(()=>Tf().filter((e,t)=>B!==`basse`||t%2==0).map(({modele:t,pos:n,tour:r,k:i})=>{let a=new Be;return a.add(e.getObjectByName(`lierre-${t+1}`).clone(!0)),a.position.set(...n),a.rotation.set(0,r,0),a.scale.setScalar(i),a.traverse(e=>{e instanceof je&&(e.castShadow=!0,e.receiveShadow=!0)}),a}),[e]);return(0,K.jsx)(K.Fragment,{children:t.map((e,t)=>(0,K.jsx)(`primitive`,{object:e},t))})}function Df(){return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(Cf,{}),(0,K.jsx)(Z,{url:`/agr-piscine-confidentialite/demo-3d/models/decor/portail-fer.glb`,position:[Dl.x,0,Dl.z],rotation:[0,Math.PI/2,0]}),(0,K.jsx)(Ef,{}),Ml.map(([e,t,n],r)=>(0,K.jsx)(Z,{url:`/agr-piscine-confidentialite/demo-3d/models/decor/jarre.glb`,position:[e,0,t],rotation:[0,n,0]},r))]})}var Of=Math.SQRT1_2,kf={"spa-mirana":{L:2.1,W:1.56,H:.78,jets:38,air:12,appuis:2,pieds:2,allonges:[{tete:[.72,-.31],pied:[-.18,-.31]},{tete:[.72,.31],pied:[-.18,.31]}],sieges:[{c:[-.6,.1],vers:[1,0],appui:!1}],puits:{c:[-.2,.02],demi:[.2,.2]},clavier:`x-`,skimmer:{c:[-.7,-.44]}},"spa-pianosa":{L:2.1,W:1.56,H:.84,jets:19,air:0,appuis:3,pieds:2,allonges:[{tete:[.72,-.3],pied:[-.15,-.3]}],sieges:[{c:[.6,.31],vers:[-1,0]},{c:[-.6,.16],vers:[1,0]}],puits:{c:[-.08,.14],demi:[.26,.27]},clavier:`z-`,skimmer:{c:[-.89,-.36],vers:[1,0],large:.3}},"spa-silenzio":{L:2.2,W:2.3,H:.93,jets:77,air:12,appuis:4,pieds:4,allonges:[{tete:[-.76,-.66],pied:[.26,-.66]}],sieges:[{c:[-.67,-.06],vers:[1,0]},{c:[-.6,.65],vers:[Of,-Of]},{c:[.02,.72],vers:[0,-1],appui:!1},{c:[.6,.65],vers:[-Of,-Of]},{c:[.67,.08],vers:[-1,0],appui:!1}],puits:{c:[.02,.04],demi:[.3,.32]},clavier:`z-`,skimmer:{c:[.94,-.6],vers:[-1,0]}},"spa-maguana":{L:2.2,W:2.2,H:.96,jets:64,air:0,appuis:3,pieds:6,allonges:[{tete:[.7,-.66],pied:[-.28,-.66]},{tete:[.7,.66],pied:[-.1,.66]}],sieges:[{c:[-.67,.08],vers:[1,0]},{c:[-.6,.62],vers:[Of,-Of],appui:!1},{c:[.67,0],vers:[-1,0],appui:!1}],puits:{c:[.02,0],demi:[.3,.28]},clavier:`z-`,skimmer:{c:[-.7,-.62]}}},Af=[-11.4,.17,16.55],jf=typeof matchMedia<`u`&&matchMedia(`(prefers-reduced-motion: reduce)`).matches,Mf=8;function Nf(e,t,n){let r=[];for(let i=0;i<4;i++){let a=(i+.5)*(Math.PI/2),o=Math.sign(Math.cos(a))*(e-n),s=Math.sign(Math.sin(a))*(t-n);for(let e=0;e<Mf;e++){let t=(i+e/7)*(Math.PI/2);r.push([o+n*Math.cos(t),s+n*Math.sin(t)])}}return r}function Pf(e,t=!1){let n=[],r=[];for(let t of e){let e=Nf(t.a,t.b,t.r),i=0;for(let a=0;a<33;a++){let o=e[a%32];if(a>0){let t=e[a-1];i+=Math.hypot(o[0]-t[0],o[1]-t[1])}n.push(o[0],t.y,o[1]),r.push(i,t.y)}}let i=[];for(let t=0;t<e.length-1;t++)for(let e=0;e<32;e++){let n=t*33+e,r=n+33;i.push(n,r,n+1,n+1,r,r+1)}if(t){let t=n.length/3,a=(e.length-1)*33;n.push(0,e[e.length-1].y,0),r.push(0,0);for(let e=0;e<32;e++)i.push(a+e,t,a+e+1)}let a=new N;return a.setAttribute(`position`,new k(new Float32Array(n),3)),a.setAttribute(`uv`,new k(new Float32Array(r),2)),a.setIndex(i),a.computeVertexNormals(),a}var Ff=.2,If=e=>Math.max(.08,Ff-e*.5),Lf=.16,Rf=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)};function zf(e){let{L:t,W:n,H:r}=e,i=t/2-Lf,a=n/2-Lf,o=If(Lf),s=.12,c=s+Math.min(.3,(r-.12)*.36),l=c+.17,u=(e,t)=>{let n=Math.abs(e)-(i-o),r=Math.abs(t)-(a-o);return-(Math.hypot(Math.max(n,0),Math.max(r,0))-o+Math.min(Math.max(n,r),0))},d=e.allonges.map(e=>{let t=e.pied[0]-e.tete[0],n=e.pied[1]-e.tete[1],r=Math.hypot(t,n);return{...e,long:r,u:[t/r,n/r]}}),f=[[0,c+.15],[.14,c+.12],[.4,c-.03],[.62,c+.08],[.82,c-.07],[1,.25]],p=e=>{for(let t=0;t<f.length-1;t++)if(e<=f[t+1][0])return f[t][1]+(f[t+1][1]-f[t][1])*Rf(f[t][0],f[t+1][0],e);return f[f.length-1][1]};return{hauteur:(t,n)=>{let i=l,a=(e,t)=>void(i-=t*Math.max(0,i-e)),o=Math.max(Math.abs(t-e.puits.c[0])-e.puits.demi[0],Math.abs(n-e.puits.c[1])-e.puits.demi[1]);a(s,1-Rf(-.05,.05,o));for(let r of e.sieges){let e=t-r.c[0],i=n-r.c[1],o=e*r.vers[0]+i*r.vers[1],s=-e*r.vers[1]+i*r.vers[0],l=((o+.12)/.38)**4+(s/.275)**4;a(c+.035*(s/.275)**2,1-Rf(.7,1.2,l))}for(let e of d){let r=t-e.tete[0],i=n-e.tete[1],o=Math.min(1.08,Math.max(-.12,(r*e.u[0]+i*e.u[1])/e.long)),s=Math.hypot(r-e.u[0]*o*e.long,i-e.u[1]*o*e.long);a(p(Math.min(1,Math.max(0,o)))+.045*(s/.26)**2,1-Rf(.2,.3,s))}return r-.12+(i-(r-.12))*Rf(0,.065,u(t,n))},dBord:u,ia:i,ib:a,fond:s,assise:c}}function Bf(e){let{L:t,W:n,H:r}=e,i=t/2,a=n/2,o=(e,t)=>({a:i-e,b:a-e,r:If(e),y:t}),s=Pf([o(0,r-.075),o(0,r-.02),o(.02,r-.004),o(.06,r),o(.11,r-.002),o(.145,r-.025),o(Lf,r-.1),o(.17,r-.16)]),c=Pf([o(.028,.1),o(.028,r-.07)]),l=Pf([o(.05,0),o(.05,.1)]),u=zf(e),d=new Float32Array(43923);for(let e=0;e<=120;e++)for(let t=0;t<=120;t++){let n=-u.ia+2*u.ia*t/120,r=-u.ib+2*u.ib*e/120;d.set([n,u.hauteur(n,r),r],(e*121+t)*3)}let f=[];for(let e=0;e<120;e++)for(let t=0;t<120;t++){let n=e*121+t;f.push(n,n+120+1,n+1,n+1,n+120+1,n+120+2)}let p=new N;p.setAttribute(`position`,new k(d,3)),p.setIndex(f),p.computeVertexNormals();let m=r-.13,h=Pf([o(.164,m)],!0),g=h.attributes.uv,_=h.attributes.position;for(let e=0;e<g.count;e++)g.setXY(e,_.getX(e),_.getZ(e));let v=[],y=new A,b=new j(0,1,0),x=(e,t,n)=>v.push(new L().compose(e.clone().addScaledVector(t,.007),y.setFromUnitVectors(b,t).clone(),new j(n,1,n))),S=(e,t)=>new j(u.hauteur(e-.01,t)-u.hauteur(e+.01,t),.02,u.hauteur(e,t-.01)-u.hauteur(e,t+.01)).normalize(),C=r-.24,w=Math.max(1,Math.floor((C-(u.assise+.1))/.065)+1),T=e.pieds??0;for(let t=0;t<T;t++){let n=(t+.5)/T*Math.PI*2,r=new j(Math.cos(n),0,Math.sin(n)),i=u.fond+.13,a=e.puits.c[0],o=e.puits.c[1];for(let e=0;e<200&&u.hauteur(a,o)<i;e++)a+=r.x*.004,o+=r.z*.004;x(new j(a,i,o),r.clone().negate().setY(.35).normalize(),2.3)}let E=e.jets-T,D=Math.min(4*w,Math.floor(E/(e.sieges.length+1.5*e.allonges.length)));for(let t of e.sieges){let e=Math.min(4,Math.ceil(D/w));for(let n=0;n<D;n++){let r=n%e,i=Math.floor(n/e),a=(r-(e-1)/2)*.085+(i%2?.02:-.02),o=C-i*.065,s=t.c[0]-t.vers[1]*a,c=t.c[1]+t.vers[0]*a;for(let e=0;e<160&&u.hauteur(s,c)<o;e++)s-=t.vers[0]*.004,c-=t.vers[1]*.004;x(new j(s,o,c),new j(t.vers[0],.25,t.vers[1]).normalize(),(r+i)%3==0?1.55:1)}}let O=E-D*e.sieges.length;e.allonges.forEach((t,n)=>{let r=t.pied[0]-t.tete[0],i=t.pied[1]-t.tete[1],a=Math.hypot(r,i),o=[r/a,i/a],s=Math.floor(O/e.allonges.length)+ +(n<O%e.allonges.length),c=s>=8?4:0,l=(e,n,r)=>{let i=t.tete[0]+o[0]*e*a-o[1]*n,s=t.tete[1]+o[1]*e*a+o[0]*n;x(new j(i,u.hauteur(i,s),s),S(i,s),r)};for(let e=0;e<s-c;e++){let t=e%3,n=Math.floor(e/3);l(.07+n*.07/a,(t-1)*.1,(t+n)%2?1:1.55)}c&&[[.66,-.09],[.66,.09],[.94,-.08],[.94,.08]].forEach(([e,t])=>l(e,t,1.55))});for(let t=0;t<e.air;t++){let n=t/e.air*Math.PI*2,r=e.puits.c[0]+Math.cos(n)*e.puits.demi[0]*.62,i=e.puits.c[1]+Math.sin(n)*e.puits.demi[1]*.62;x(new j(r,u.hauteur(r,i),i),new j(0,1,0),.6)}let ee=[...e.allonges.map(e=>{let t=Math.hypot(e.pied[0]-e.tete[0],e.pied[1]-e.tete[1]);return{c:e.tete,vers:[(e.pied[0]-e.tete[0])/t,(e.pied[1]-e.tete[1])/t]}}),...e.sieges.filter(e=>e.appui!==!1)],te=ee.slice(0,e.appuis).map(e=>{let t=e.c[0],n=e.c[1];for(let r=0;r<400&&u.dBord(t,n)>.022;r++)t-=e.vers[0]*.002,n-=e.vers[1]*.002;return{pos:[t,r-.105,n],tour:Math.atan2(-e.vers[1],e.vers[0])}}),ne=e.clavier===`x+`?[i,0]:e.clavier===`x-`?[-i,0]:e.clavier===`z+`?[0,a]:[0,-a],re=ee.flatMap((e,t)=>{let n=e.c[0],o=e.c[1];for(let t=0;t<260&&u.dBord(n,o)>-.075;t++)n-=e.vers[0]*.004,o-=e.vers[1]*.004;let s=t%2?.27:-.27;return n+=-e.vers[1]*s,o+=e.vers[0]*s,Math.abs(n)>i-.05||Math.abs(o)>a-.05||u.dBord(n,o)>-.03||Math.hypot(n-ne[0],o-ne[1])<.3?[]:[[n,r+.012,o]]}),ie=.085,ae={pos:e.clavier===`x+`?[i-ie,r+.002,0]:e.clavier===`x-`?[-i+ie,r+.002,0]:e.clavier===`z+`?[0,r+.002,a-ie]:[0,r+.002,-a+ie],tour:e.clavier.startsWith(`x`)?Math.PI/2:0},oe=e.skimmer;return{margelle:s,cuve:p,meuble:c,socle:l,eau:h,eauY:m,matrices:v,coussins:te,molettes:re,clavier:ae,skimmer:{pos:[oe.c[0],u.hauteur(oe.c[0]+(oe.vers?.[0]??0)*.12,oe.c[1]+(oe.vers?.[1]??0)*.12),oe.c[1]],tour:oe.vers?Math.atan2(-oe.vers[1],oe.vers[0]):null,large:oe.large??.5},bonde:[e.puits.c[0],u.fond+.004,e.puits.c[1]],W:n,H:r}}var Vf=null;function Hf(){if(Vf)return Vf;let e=document.createElement(`canvas`);e.width=256,e.height=128;let t=e.getContext(`2d`),n=17,r=()=>(n=n*16807%2147483647)/2147483647;for(let e=0;e<128;e++){let n=e%32/32,i=n<.08?.35:n<.16?1.18:1;for(let n=0;n<256;n+=4){let a=i*(.92+r()*.12);t.fillStyle=`rgb(${Math.round(62*a)},${Math.round(64*a)},${Math.round(69*a)})`,t.fillRect(n,127-e,4,1)}}return t.fillStyle=`rgba(15,16,18,0.7)`,t.fillRect(0,0,3,128),Vf=new qe(e),Vf.wrapS=Vf.wrapT=Ke,Vf.colorSpace=it,Vf.repeat.set(1/.85,1/.8),Vf}var Uf=new P(`#3fa9bb`),Wf=new wc(.05,.17,.34,3,.022),Gf=new at(.019,.0045,6,18).rotateX(Math.PI/2),Kf=new P;function qf({gabarit:e}){let t=(0,U.useMemo)(()=>Bf(e),[e]),n=c(`/agr-piscine-confidentialite/demo-3d/textures/eau/normales.webp`),r=(0,U.useMemo)(()=>{let e=n.clone();return e.wrapS=e.wrapT=Ke,e.repeat.set(2.2,2.2),e.needsUpdate=!0,e},[n]),i=(0,U.useRef)(null),a=(0,U.useRef)(null),o=(0,U.useRef)(null);return(0,U.useLayoutEffect)(()=>{for(let e of[i.current,a.current])e&&(t.matrices.forEach((t,n)=>e.setMatrixAt(n,t)),e.instanceMatrix.needsUpdate=!0,e.computeBoundingSphere())},[t]),(0,U.useLayoutEffect)(()=>()=>[t.margelle,t.cuve,t.meuble,t.socle,t.eau].forEach(e=>e.dispose()),[t]),I(({clock:e},t)=>{jf||(r.offset.x+=t*.11,r.offset.y+=t*.07);let n=o.current;if(!n)return;let i=ll(.28,.62,G.nuit);n.emissive.copy(Kf.setHSL(e.elapsedTime*.025%1,.85,.5)),n.emissiveIntensity=1.5*i,jf||n.normalScale.setScalar(.9+.25*Math.sin(e.elapsedTime*3.1))}),(0,K.jsxs)(`group`,{position:Af,children:[(0,K.jsx)(`mesh`,{geometry:t.socle,castShadow:!0,children:(0,K.jsx)(`meshStandardMaterial`,{color:`#141516`,roughness:.6,side:2})}),(0,K.jsx)(`mesh`,{geometry:t.meuble,castShadow:!0,receiveShadow:!0,children:(0,K.jsx)(`meshStandardMaterial`,{map:Hf(),bumpMap:Hf(),bumpScale:.6,roughness:.75,side:2})}),(0,K.jsx)(`mesh`,{geometry:t.margelle,castShadow:!0,receiveShadow:!0,children:(0,K.jsx)(`meshPhysicalMaterial`,{color:`#f3f3f0`,roughness:.22,clearcoat:.7,clearcoatRoughness:.12,side:2})}),(0,K.jsx)(`mesh`,{geometry:t.cuve,receiveShadow:!0,children:(0,K.jsx)(`meshPhysicalMaterial`,{color:`#f3f3f0`,roughness:.22,clearcoat:.7,clearcoatRoughness:.12,side:2})}),t.skimmer.tour===null?(0,K.jsxs)(`mesh`,{position:[t.skimmer.pos[0],(t.skimmer.pos[1]+t.H-.11)/2,t.skimmer.pos[2]],children:[(0,K.jsx)(`cylinderGeometry`,{args:[.085,.09,t.H-.11-t.skimmer.pos[1],20]}),(0,K.jsx)(`meshStandardMaterial`,{color:`#8b9096`,roughness:.5})]}):(0,K.jsxs)(`group`,{position:[t.skimmer.pos[0],(t.skimmer.pos[1]+t.H-.1)/2,t.skimmer.pos[2]],rotation:[0,t.skimmer.tour,0],children:[(0,K.jsxs)(`mesh`,{position:[.035,0,0],children:[(0,K.jsx)(`boxGeometry`,{args:[.07,t.H-.1-t.skimmer.pos[1],t.skimmer.large]}),(0,K.jsx)(`meshStandardMaterial`,{color:`#6e7379`,roughness:.6})]}),Array.from({length:Math.round(t.skimmer.large/.038)},(e,n)=>(0,K.jsxs)(`mesh`,{position:[.073,-.01,(n-(Math.round(t.skimmer.large/.038)-1)/2)*.034],children:[(0,K.jsx)(`boxGeometry`,{args:[.008,(t.H-.1-t.skimmer.pos[1])*.7,.012]}),(0,K.jsx)(`meshStandardMaterial`,{color:`#3f4348`,roughness:.6})]},n))]}),(0,K.jsxs)(`mesh`,{position:t.bonde,children:[(0,K.jsx)(`cylinderGeometry`,{args:[.05,.05,.008,20]}),(0,K.jsx)(`meshStandardMaterial`,{color:`#c9ccd0`,metalness:1,roughness:.3})]}),t.molettes.map((e,t)=>(0,K.jsxs)(`mesh`,{position:e,castShadow:!0,children:[(0,K.jsx)(`cylinderGeometry`,{args:[.03,.038,.028,16]}),(0,K.jsx)(`meshStandardMaterial`,{color:`#8d9298`,roughness:.55})]},t)),(0,K.jsx)(`mesh`,{geometry:t.eau,raycast:()=>{},children:(0,K.jsx)(`meshPhysicalMaterial`,{ref:o,color:Uf,transparent:!0,opacity:.2,roughness:.04,metalness:0,normalMap:r,depthWrite:!1,emissive:`#000000`,userData:{keepEmissive:!0}})}),(0,K.jsxs)(`instancedMesh`,{ref:i,args:[void 0,void 0,t.matrices.length],raycast:()=>{},children:[(0,K.jsx)(`cylinderGeometry`,{args:[.016,.017,.014,14]}),(0,K.jsx)(`meshStandardMaterial`,{color:`#25282c`,roughness:.45})]},`c${t.matrices.length}`),(0,K.jsx)(`instancedMesh`,{ref:a,args:[Gf,void 0,t.matrices.length],raycast:()=>{},children:(0,K.jsx)(`meshStandardMaterial`,{color:`#e3e6e9`,metalness:1,roughness:.2})},`a${t.matrices.length}`),t.coussins.map((e,t)=>(0,K.jsx)(`group`,{position:e.pos,rotation:[0,e.tour,0],children:(0,K.jsx)(`mesh`,{geometry:Wf,castShadow:!0,children:(0,K.jsx)(`meshStandardMaterial`,{color:`#3d4044`,roughness:.85})})},t)),(0,K.jsxs)(`group`,{position:t.clavier.pos,rotation:[0,t.clavier.tour,0],children:[(0,K.jsxs)(`mesh`,{scale:[.115,1,.05],children:[(0,K.jsx)(`cylinderGeometry`,{args:[1,1,.012,32]}),(0,K.jsx)(`meshStandardMaterial`,{color:`#1b2a44`,roughness:.3})]}),[-.07,.07].flatMap(e=>[-.02,.02].map(t=>(0,K.jsxs)(`mesh`,{position:[e,.007,t],children:[(0,K.jsx)(`cylinderGeometry`,{args:[.011,.011,.003,12]}),(0,K.jsx)(`meshStandardMaterial`,{color:`#c9d4e4`,roughness:.4})]},`${e},${t}`))),(0,K.jsxs)(`mesh`,{position:[0,.007,0],children:[(0,K.jsx)(`boxGeometry`,{args:[.06,.002,.035]}),(0,K.jsx)(`meshStandardMaterial`,{color:`#0a0f14`,emissive:`#5fd0ff`,emissiveIntensity:.9,userData:{keepEmissive:!0}})]})]}),(0,K.jsxs)(`group`,{position:[0,0,-t.W/2],children:[(0,K.jsxs)(`mesh`,{position:[0,.2,-.19],castShadow:!0,receiveShadow:!0,children:[(0,K.jsx)(`boxGeometry`,{args:[.92,.4,.36]}),(0,K.jsx)(`meshStandardMaterial`,{color:`#44474b`,roughness:.8})]}),(0,K.jsxs)(`mesh`,{position:[0,.1,-.55],castShadow:!0,receiveShadow:!0,children:[(0,K.jsx)(`boxGeometry`,{args:[.92,.2,.36]}),(0,K.jsx)(`meshStandardMaterial`,{color:`#44474b`,roughness:.8})]}),[[.405,-.19],[.205,-.55]].map(([e,t])=>(0,K.jsxs)(`mesh`,{position:[0,e,t],receiveShadow:!0,children:[(0,K.jsx)(`boxGeometry`,{args:[.96,.02,.4]}),(0,K.jsx)(`meshStandardMaterial`,{color:`#5a5e63`,roughness:.75})]},e))]})]})}function Jf(){let e=z(e=>e.pool.spa?e.materiel.spa:null),t=e?kf[e]:void 0;return!e||!t?null:(0,K.jsx)(X,{id:`spa`,children:(0,K.jsx)(qf,{gabarit:t},e)})}function Yf(){let e=Jr(`plage`),t=(0,U.useMemo)(()=>({dalle:Jd(22.6,.17,5.1),marche:Jd(23.3,.09,5.8),aile:Jd(6,.17,1.5)}),[]),n=(0,K.jsx)(`meshStandardMaterial`,{...e,...Yr(`plage`)});return(0,K.jsxs)(`group`,{children:[(0,K.jsx)(`mesh`,{geometry:t.marche,position:[-1.9,.035,16.45-.35],receiveShadow:!0,castShadow:!0,children:n}),(0,K.jsx)(`mesh`,{geometry:t.dalle,position:[-1.9,.085,16.45],receiveShadow:!0,castShadow:!0,children:n}),(0,K.jsx)(`mesh`,{geometry:t.aile,position:[6.2,.085,19.7],receiveShadow:!0,children:n})]})}function Xf(){let e=document.createElement(`canvas`);e.width=e.height=512;let t=e.getContext(`2d`),n=11,r=()=>(n=n*16807%2147483647)/2147483647;for(let e=0;e<8;e++){let n=46+r()*14;t.fillStyle=`hsl(${28+r()*8}, ${22+r()*12}%, ${n}%)`,t.fillRect(0,e*64,512,64);for(let n=0;n<26;n++){t.strokeStyle=`rgba(60,40,25,${.05+r()*.12})`,t.lineWidth=.6+r()*1.2,t.beginPath();let n=e*64+4+r()*56;t.moveTo(0,n),t.bezierCurveTo(170,n+(r()-.5)*8,340,n+(r()-.5)*8,512,n),t.stroke()}t.fillStyle=`rgba(215,205,190,${.08+r()*.1})`,t.fillRect(r()*300,e*64+6,120+r()*160,52),t.fillStyle=`#2a2018`,t.fillRect(0,e*64,512,3)}let i=new qe(e);return i.colorSpace=it,i.wrapS=i.wrapT=Ke,i.anisotropy=8,i}function Zf(){let e=(0,U.useMemo)(()=>{let e=Xf();return e.repeat.set(5.700000000000001/2.4,5.75/1.12),e},[3.35,9.05,14.55,20.3]);return(0,K.jsxs)(`mesh`,{position:[12.4/2,.185,34.85/2],receiveShadow:!0,castShadow:!0,children:[(0,K.jsx)(`boxGeometry`,{args:[5.700000000000001,.03,5.75]}),(0,K.jsx)(`meshStandardMaterial`,{map:e,roughness:.82})]})}function Qf(e,t,n){let r=new xe(...e),i=e.indexOf(Math.max(...e)),a=r.attributes.position,o=r.attributes.normal,s=r.attributes.uv,c=n*.618%1,l=n*.377%1;for(let e=0;e<a.count;e++){let t=[a.getX(e),a.getY(e),a.getZ(e)],n=[Math.abs(o.getX(e)),Math.abs(o.getY(e)),Math.abs(o.getZ(e))],r=n.indexOf(Math.max(...n)),u=[0,1,2].filter(e=>e!==r),[d,f]=r===i?u:[u.find(e=>e!==i),i];s.setXY(e,t[d]+c*3,t[f]+l*7)}return r.translate(...t),r}function $f(){let e=Jr(`pergola`),t=(0,U.useMemo)(()=>{let e=3.5,t=8.9,n=[],r=1;for(let i of[e,t])for(let e of[14.7,19.9])n.push(Qf([.15,2.75,.15],[i,1.545,e],r++));for(let i of[e,t])n.push(Qf([.13,.18,6.2],[i,3.01,34.9/2],r++));for(let e=0;e<13;e++)n.push(Qf([5.4+.9,.12,.07],[12.4/2,3.16,14.5+e*5.8/12],r++));return J(n)},[]);return(0,K.jsx)(`mesh`,{geometry:t,castShadow:!0,receiveShadow:!0,children:(0,K.jsx)(`meshStandardMaterial`,{...e,...Yr(`pergola`)})})}function ep(){return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(Z,{url:`/agr-piscine-confidentialite/demo-3d/models/decor/table-repas.glb`,position:[-7.5,.17,16.4]}),(0,K.jsx)(Z,{url:`/agr-piscine-confidentialite/demo-3d/models/decor/salon-teck.glb`,position:[6.2,.2,17.3],rotation:[0,Math.PI,0]}),(0,K.jsx)(Z,{url:`/agr-piscine-confidentialite/demo-3d/models/decor/salon-jardin.glb`,position:[1.5,.17,16.9],rotation:[0,.25,0]})]})}function tp(){let e=3,t=()=>(e=e*16807%2147483647)/2147483647;return Array.from({length:11},(e,n)=>({x:-3.2+(t()-.5)*.18,z:13.55-n*.92,tour:(t()-.5)*.16,l:.78+t()*.14,p:.5+t()*.1}))}function np(){let e=(0,U.useMemo)(()=>tp(),[]);return(0,K.jsx)(K.Fragment,{children:e.map((e,t)=>(0,K.jsxs)(`mesh`,{position:[e.x,.012,e.z],rotation:[0,e.tour,0],receiveShadow:!0,children:[(0,K.jsx)(`boxGeometry`,{args:[e.l,.045,e.p]}),(0,K.jsx)(`meshStandardMaterial`,{color:`#c9bda6`,roughness:.92,normalMap:_(2,2),normalScale:[1.2,1.2]})]},t))})}var rp=[[-6.4,4.35],[.4,4.35],[-9.3,-1.6],[-2.5,9.2],[3.3,3.2],[-3.9,13.2]],ip=B===`haute`?2:1;function ap(){let e=(0,U.useRef)(null),t=(0,U.useRef)(null),n=(0,U.useRef)(null),r=(0,U.useRef)(null);return I(()=>{let i=ll(.28,.62,G.nuit);e.current?.children.forEach(e=>{let t=e;t.isPointLight&&(t.intensity=3.2*i)}),t.current&&(t.current.intensity=9*i),n.current&&(n.current.intensity=9*i),r.current&&(r.current.intensity=6*i),q.uProjecteur.value.w=i,cd.forEach(e=>e.emissiveIntensity=e.userData.lueur*i)}),(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(`group`,{ref:e,children:rp.slice(0,ip).map(([e,t])=>(0,K.jsx)(`pointLight`,{position:[e,.62,t],color:`#ffb267`,intensity:0,distance:9,decay:2},`${e},${t}`))}),rp.map(([e,t])=>(0,K.jsxs)(`group`,{position:[e,0,t],children:[(0,K.jsxs)(`mesh`,{position:[0,.26,0],castShadow:!0,children:[(0,K.jsx)(`cylinderGeometry`,{args:[.04,.045,.52,12]}),(0,K.jsx)(`meshStandardMaterial`,{color:`#2b2d30`,roughness:.5,metalness:.6})]}),(0,K.jsxs)(`mesh`,{position:[0,.56,0],children:[(0,K.jsx)(`cylinderGeometry`,{args:[.05,.05,.1,12]}),(0,K.jsx)(`meshStandardMaterial`,{ref:ld(7),color:`#f6ead2`,roughness:.4,emissive:`#ffb267`,emissiveIntensity:0,userData:{keepEmissive:!0}})]}),(0,K.jsxs)(`mesh`,{position:[0,.625,0],children:[(0,K.jsx)(`cylinderGeometry`,{args:[.075,.075,.025,12]}),(0,K.jsx)(`meshStandardMaterial`,{color:`#2b2d30`,roughness:.5,metalness:.6})]})]},`${e},${t}`)),(0,K.jsx)(`pointLight`,{ref:t,position:[-6.05,-.62,0],color:`#b9e2ff`,intensity:0,distance:15,decay:2}),(0,K.jsx)(`pointLight`,{ref:n,position:[-4,2.5,17.9],color:`#ffb267`,intensity:0,distance:15,decay:2}),(0,K.jsx)(`pointLight`,{ref:r,position:[6.2,2.4,18.4],color:`#ffb267`,intensity:0,distance:11,decay:2})]})}function op(){return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(mf,{}),(0,K.jsx)(Yf,{}),(0,K.jsx)(Zf,{}),(0,K.jsx)($f,{}),(0,K.jsx)(np,{}),Xt(`mobilier`)&&(0,K.jsx)(ep,{}),Xt(`enclos`)&&(0,K.jsx)(Df,{}),Xt(`spa`)&&(0,K.jsx)(Jf,{}),Xt(`lampes`)&&(0,K.jsx)(ap,{})]})}var sp=Gt?26e4:Ut===`haute`?15e4:6e4,cp=It?Gt?[26,40]:[20,31]:Gt?[15,24]:Ut===`haute`?[10,17]:[7,12];function lp(){let e=new se;e.setAttribute(`position`,new k(new Float32Array([-.5,0,0,.5,0,0,-.32,.5,0,.32,.5,0,0,1,0]),3)),e.setAttribute(`normal`,new k(new Float32Array([0,1,0,0,1,0,0,1,0,0,1,0,0,1,0]),3)),e.setIndex([0,1,2,1,3,2,2,3,4]);let t=xl(77),n=new Float32Array(sp*3),r=new Float32Array(sp*2),i=tp(),a=(e,t)=>ni(e,t)||Ei.some(([n,r,i,a])=>e>n&&e<r&&t>i&&t<a)||i.some(n=>Math.abs(e-n.x)<n.l/2+.03&&Math.abs(t-n.z)<n.p/2+.03),o=Y.x0+.5,s=Y.x1-.5,c=Y.z0+.5;for(let e=0;e<sp;){let i=o+t()*(s-o),l=c+t()*(13.15-c);a(i,l)||(n.set([i,l,t()*Math.PI*2],e*3),r.set([t(),t()],e*2),e++)}return e.setAttribute(`aBrin`,new re(n,3)),e.setAttribute(`aNuance`,new re(r,2)),e.instanceCount=sp,e}var up=It?`
        float plonge = clamp(normalize(cameraPosition - pied).y, 0.0, 1.0);
        transformed.xz += vec2(cos(aBrin.z), sin(aBrin.z)) * position.y * hBrin * 1.1 * plonge * plonge;
        transformed.y -= position.y * hBrin * 0.35 * plonge * plonge;
`:``;function dp(e){e.uniforms.uTempsH=q.uTime,e.vertexShader=`attribute vec3 aBrin;   // x, z, orientation
    attribute vec2 aNuance; // hauteur et teinte, phase du vent
    uniform float uTempsH;
    varying vec3 vPosH;
    varying vec2 vBrinH;
    `+e.vertexShader.replace(`#include <beginnormal_vertex>`,`vec3 objectNormal = vec3(0.0, 1.0, 0.0);`).replace(`#include <begin_vertex>`,`
        vec3 pied = vec3(aBrin.x, -0.01, aBrin.y);
        float hBrin = mix(0.055, 0.115, aNuance.x) * (1.0 - smoothstep(${cp[0].toFixed(1)}, ${cp[1].toFixed(1)}, distance(cameraPosition, pied)));
        // chaque brin se présente de face à la caméra (à un demi-tour de hasard près) : aucun brin vu par la tranche
        vec2 versCam = normalize(cameraPosition.xz - pied.xz + 1e-4);
        float tour = (fract(aBrin.z * 3.7) - 0.5) * 1.1;
        vec2 large = mat2(cos(tour), -sin(tour), sin(tour), cos(tour)) * vec2(versCam.y, -versCam.x);
        float ca = large.x, sa = large.y;
        float courbe = position.y * position.y;
        // bandes de tonte : les brins sont couchés dans un sens, puis dans l'autre, d'une bande à la suivante
        float sens = sin(pied.x * 1.9635) > 0.0 ? 1.0 : -1.0;
        float vent = sin(uTempsH * 1.7 + pied.x * 0.9 + pied.z * 0.7 + aNuance.y * 6.2832) * 0.6 + sin(uTempsH * 0.55 + pied.x * 0.21 + pied.z * 0.13) * 0.4;
        vec3 transformed = pied + vec3(ca * position.x * 0.026, position.y * hBrin, sa * position.x * 0.026);
        transformed.xz += (vec2(cos(aBrin.z), sin(aBrin.z)) * 0.3 + vec2(0.0, sens * 0.35) + vec2(0.8, 0.45) * vent * 0.32) * courbe * hBrin;
${up}        vPosH = transformed;
        vBrinH = vec2(position.y, aNuance.x);`).replace(`#include <project_vertex>`,`#include <project_vertex>
  if (hBrin < 0.004) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);`),e.fragmentShader=`varying vec3 vPosH;
    varying vec2 vBrinH;
    float h2(vec2 p) { return fract(sin(dot(p, vec2(41.3, 289.1))) * 43758.5); }
    float vn(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
      return mix(mix(h2(i), h2(i + vec2(1, 0)), f.x), mix(h2(i + vec2(0, 1)), h2(i + vec2(1, 1)), f.x), f.y); }
    `+e.fragmentShader.replace(`#include <map_fragment>`,`
      // couleur de la pelouse du jardin (World.tsx, variationPelouse) : teinte moyenne de la texture, bandes de tonte
      float vH = vn(vPosH.xz * 0.12) * 0.65 + vn(vPosH.xz * 0.37 + 7.0) * 0.35;
      float bandesH = 1.0 + 0.07 * smoothstep(-0.15, 0.15, sin(vPosH.x * 1.9635));
      vec3 solH = textureLod(map, vec2(0.5), 12.0).rgb * diffuse * vec3(0.5, 0.78, 0.4) * mix(0.9, 1.08, vH) * bandesH;
      // plus sombre au pied (les brins se font de l'ombre), plus clair et un peu jauni à la pointe
      float hautH = clamp(vBrinH.x, 0.0, 1.0);
      diffuseColor.rgb = solH * mix(0.7, 1.28, hautH) * mix(vec3(0.94, 1.0, 0.92), vec3(1.1, 1.04, 0.82), clamp(vBrinH.y, 0.0, 1.0) * hautH);`).replace(`#include <normal_fragment_maps>`,`normal = normalize(vNormal);
#include <normal_fragment_maps>`).replace(`#include <roughnessmap_fragment>`,`float roughnessFactor = roughness;
      #ifdef USE_ROUGHNESSMAP
        roughnessFactor *= textureLod(roughnessMap, vec2(0.5), 12.0).g;
      #endif`),It&&(e.fragmentShader=e.fragmentShader.replace(`#include <dithering_fragment>`,`#include <dithering_fragment>
  gl_FragColor.a = 0.0;`))}function fp(){let e=z(e=>e.xray),t=Jr(`pelouse`),n=(0,U.useMemo)(()=>{let e=new rt({map:t.map,color:t.color,roughnessMap:t.roughnessMap,roughness:t.roughness,metalness:0,side:2});e.onBeforeCompile=dp,e.customProgramCacheKey=()=>It?`herbe-refonte-tactile`:`herbe-refonte`;let n=new je(lp(),e);return n.frustumCulled=!1,n.receiveShadow=!0,n.raycast=()=>{},n},[t]);return(0,U.useLayoutEffect)(()=>(Bn.add(n),It&&Vn.add(n),()=>{Bn.delete(n),Vn.delete(n),n.geometry.dispose(),n.material.dispose()}),[n]),(0,K.jsx)(`primitive`,{object:n,visible:!e})}var pp=typeof matchMedia<`u`&&matchMedia(`(prefers-reduced-motion: reduce)`).matches;function mp(e){let t=new N,n=[];for(let t=1;t<e.length-1;t++)n.push(e[0][0],0,e[0][1],e[t][0],0,e[t][1],e[t+1][0],0,e[t+1][1]);return t.setAttribute(`position`,new k(new Float32Array(n),3)),t.setAttribute(`normal`,new k(new Float32Array(n.length).map((e,t)=>+(t%3==1)),3)),t}var hp=new L,gp=new A,_p=new A,vp=new nt,yp=new j,bp=new j,xp=new j(0,0,1);function Sp(e,t,n,r,i,a,o,s,c){gp.setFromEuler(vp.set(0,a,o,`YXZ`));for(let a of[1,-1])_p.setFromAxisAngle(xp,a*s),hp.compose(yp.set(n,r,i),_p.premultiply(gp),bp.set(a*c,c,c)),e.setMatrixAt(t*2+(a>0?0:1),hp)}var Cp=[`#f6f1df`,`#f2c230`,`#e98a2b`,`#7fa6d9`,`#f6f1df`,`#f2c230`,`#c96a8f`];function wp(){let e=(0,U.useRef)(null),t=(0,U.useMemo)(()=>mp([[0,-.45],[.75,-.8],[1.05,-.2],[.8,.35],[.45,.75],[0,.4]]),[]),n=(0,U.useMemo)(()=>{let e=xl(41);return Cp.map(t=>({teinte:t,x:-7.5+e()*9,z:-4.6+(e()-.5)*1.2,y:.55+e()*.5,a:.25+e()*.3,b:.3+e()*.35,ph:e()*40,taille:.03+e()*.014}))},[]);return(0,U.useLayoutEffect)(()=>{let t=new P;n.forEach((n,r)=>[0,1].forEach(i=>e.current?.setColorAt(r*2+i,t.set(n.teinte)))),e.current?.instanceColor&&(e.current.instanceColor.needsUpdate=!0)},[n]),I(({clock:t})=>{let r=e.current;if(!r)return;let i=pp?0:t.elapsedTime,a=1-Math.min(1,G.nuit*2.5);n.forEach((e,t)=>{let n=t=>[e.x+Math.sin(t*e.a+e.ph)*1.6+Math.sin(t*1.9+e.ph*3)*.25,e.y+Math.sin(t*e.b*2.1+e.ph*2)*.28+Math.sin(t*7+e.ph)*.03,e.z+Math.cos(t*e.b+e.ph*1.3)*.9],[o,s,c]=n(i),[l,,u]=n(i+.05);Sp(r,t,o,s,c,Math.atan2(-(u-c),l-o)+Math.PI/2,0,.15+1.05*Math.abs(Math.sin(i*16+e.ph)),e.taille*a)}),r.instanceMatrix.needsUpdate=!0}),(0,K.jsx)(`instancedMesh`,{ref:e,args:[t,void 0,Cp.length*2],frustumCulled:!1,raycast:()=>{},children:(0,K.jsx)(`meshStandardMaterial`,{side:2,roughness:.7})})}var Tp=6;function Ep(){let e=(0,U.useRef)(null),t=(0,U.useMemo)(()=>mp([[0,-.16],[.55,-.2],[1,.02],[.5,.06],[0,.18]]),[]),n=(0,U.useMemo)(()=>{let e=xl(97);return Array.from({length:Tp},(t,n)=>({r:45+e()*70,h:26+e()*22,v:(.05+e()*.04)*(n%2?1:-1),ph:e()*6.28,cx:-2+(e()-.5)*60,cz:-20+(e()-.5)*60}))},[]);return I(({clock:t})=>{let r=e.current;if(!r)return;let i=pp?0:t.elapsedTime,a=1-Math.min(1,G.nuit*2);n.forEach((e,t)=>{let n=e.ph+i*e.v,o=Math.max(0,Math.sin(i*.35+e.ph*3))**2;Sp(r,t,e.cx+Math.cos(n)*e.r,e.h+Math.sin(i*.21+e.ph)*2.5,e.cz+Math.sin(n)*e.r,-n+(e.v>0?0:Math.PI),e.v>0?.3:-.3,.12+o*.55*Math.sin(i*9+e.ph),.75*a)}),r.instanceMatrix.needsUpdate=!0}),(0,K.jsx)(`instancedMesh`,{ref:e,args:[t,void 0,12],frustumCulled:!1,raycast:()=>{},children:(0,K.jsx)(`meshStandardMaterial`,{side:2,color:`#2a2c2f`,roughness:.9})})}var Dp=[[-11,-5.5,3.2],[3.4,-6.2,2.7],[-13,3.5,2.5]],Op=12;function kp(){let e=(0,U.useRef)(null),t=(0,U.useMemo)(()=>mp([[-.5,0],[0,-.16],[.5,0],[0,.16]]),[]),n=(0,U.useMemo)(()=>{let e=xl(13);return Array.from({length:Op},(t,n)=>({arbre:Dp[n%Dp.length],dx:(e()-.5)*2.6,dz:(e()-.5)*2.6,duree:5+e()*4,attente:6+e()*22,ph:e()*50}))},[]);return I(({clock:t})=>{let r=e.current;if(!r)return;let i=t.elapsedTime;n.forEach((e,t)=>{let n=e.duree+e.attente,a=Math.min(1,(i+e.ph)%n/e.duree),[o,s,c]=e.arbre,l=pp?.02:Math.max(.02,c*(1-a)),u=+(a<1&&!pp);gp.setFromEuler(vp.set(u*Math.sin(i*2.3+e.ph)*1.1,i*u*1.7+e.ph,u*Math.cos(i*1.9+e.ph)*.9)),hp.compose(yp.set(o+e.dx+Math.sin(i*1.1+e.ph)*.35*a+a*.8,l,s+e.dz+Math.cos(i*.9+e.ph)*.3*a),gp,bp.setScalar(.055)),r.setMatrixAt(t,hp)}),r.instanceMatrix.needsUpdate=!0}),(0,K.jsx)(`instancedMesh`,{ref:e,args:[t,void 0,Op],frustumCulled:!1,raycast:()=>{},children:(0,K.jsx)(`meshStandardMaterial`,{side:2,color:`#7d8a66`,roughness:.6})})}var Ap={vertexShader:`
    attribute vec4 aGraine; // phase, vitesse, taille (m), genre (0 pollen, 1 luciole)
    uniform float uTemps, uNuit, uEchelle;
    varying float vForce;
    varying float vGenre;
    void main() {
      float ph = aGraine.x, v = aGraine.y;
      vec3 p = position + vec3(sin(uTemps * 0.31 * v + ph) * 0.7, sin(uTemps * 0.23 * v + ph * 1.7) * 0.35, cos(uTemps * 0.27 * v + ph * 2.3) * 0.7);
      vec4 mv = modelViewMatrix * vec4(p, 1.0);
      gl_Position = projectionMatrix * mv;
      // un grain de pollen tout près de l'objectif ne devient pas une grosse tache
      gl_PointSize = clamp(aGraine.z * uEchelle / max(-mv.z, 0.3), 1.0, mix(7.0, 36.0, aGraine.w));
      vGenre = aGraine.w;
      // pollen : visible le jour ; lucioles : la nuit, elles s'allument et s'éteignent chacune à son rythme
      float clignote = pow(max(sin(uTemps * 1.1 * v + ph * 9.0), 0.0), 3.0);
      vForce = mix((1.0 - uNuit) * 0.55, smoothstep(0.55, 0.9, uNuit) * clignote, vGenre);
    }`,fragmentShader:`
    uniform vec3 uSoleilP;
    varying float vForce;
    varying float vGenre;
    void main() {
      float d = length(gl_PointCoord - 0.5);
      float a = smoothstep(0.5, 0.05, d) * vForce;
      if (a < 0.004) discard;
      vec3 c = mix(uSoleilP * 0.5, vec3(0.75, 1.0, 0.22) * 7.0, vGenre);
      gl_FragColor = vec4(c * a, 1.0);
    }`};function jp(){let e=R(e=>e.size.height),t=(0,U.useMemo)(()=>{let e=xl(5),t=B===`haute`?260:120,n=t+(B===`haute`?46:26),r=new Float32Array(n*3),i=new Float32Array(n*4);for(let a=0;a<n;a++){let n=a>=t,o=Y.x0+1+e()*(Y.x1-Y.x0-2),s=Y.z0+1+e()*(Y.z1-Y.z0-2);if(n){let t=e();t<.4?s=Y.z0+1+e()*4.5:o=t<.7?Y.x0+1+e()*3:Y.x1-1-e()*3}r.set([o,n?.3+e()*1.5:.25+e()*3.2,s],a*3),i.set([e()*60,.6+e()*.9,n?.05:.008+e()*.01,+!!n],a*4)}let a=new N;a.setAttribute(`position`,new k(r,3)),a.setAttribute(`aGraine`,new k(i,4));let o=new M({...Ap,uniforms:{uTemps:{value:0},uNuit:{value:0},uEchelle:{value:1e3},uSoleilP:{value:new P(1,.9,.7)}},transparent:!0,depthWrite:!1,blending:2}),s=new de(a,o);return s.frustumCulled=!1,s.raycast=()=>{},s},[]);return(0,U.useLayoutEffect)(()=>(Bn.add(t),()=>{Bn.delete(t),t.geometry.dispose(),t.material.dispose()}),[t]),I(({clock:n,camera:r,gl:i})=>{let a=t.material.uniforms;a.uTemps.value=pp?0:n.elapsedTime,a.uNuit.value=G.nuit,a.uEchelle.value=e*i.getPixelRatio()/(2*Math.tan(r.fov*Math.PI/360)),a.uSoleilP.value.copy(G.couleur).multiplyScalar(Math.min(1,G.intensite/4))}),(0,K.jsx)(`primitive`,{object:t})}function Mp(){return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(wp,{}),(0,K.jsx)(Ep,{}),(0,K.jsx)(kp,{}),(0,K.jsx)(jp,{})]})}function Np(e,t){let n=document.createElement(`canvas`);n.width=n.height=64;let r=n.getContext(`2d`);r.fillStyle=`#f3efe6`,r.fillRect(0,0,64,64),r.fillStyle=e;for(let e=0;e<t;e++)r.fillRect(e*64/t,0,32/t,64);let i=new qe(n);return i.colorSpace=it,i.wrapS=i.wrapT=Ke,i}function Pp({position:e}){return(0,K.jsx)(U.Suspense,{fallback:null,children:(0,K.jsx)(Z,{url:`/agr-piscine-confidentialite/demo-3d/models/decor/parasol.glb`,position:e})})}function Fp({position:e,rotation:t}){let n=(0,U.useMemo)(()=>Np(`#2f7f97`,6),[]);return(0,K.jsxs)(`mesh`,{position:e,rotation:[-Math.PI/2,0,t],receiveShadow:!0,castShadow:!0,children:[(0,K.jsx)(`planeGeometry`,{args:[.62,1.25]}),(0,K.jsx)(`meshStandardMaterial`,{map:n,roughness:1,side:2})]})}function Ip({position:e}){let t=(0,U.useRef)(null),n=(0,U.useMemo)(()=>{let e=Np(`#e2574c`,4);return e.repeat.set(2,1),e},[]);return I(({clock:e})=>{let n=t.current;if(!n)return;let r=e.elapsedTime;n.position.y=mr+.06+.006*Math.sin(r*1.1),n.rotation.set(.03*Math.sin(r*.8),r*.03,.03*Math.cos(r*.7))}),(0,K.jsx)(`group`,{ref:t,position:e,children:(0,K.jsxs)(`mesh`,{rotation:[Math.PI/2,0,0],castShadow:!0,children:[(0,K.jsx)(`torusGeometry`,{args:[.34,.11,14,40]}),(0,K.jsx)(`meshStandardMaterial`,{map:n,roughness:.35})]})})}function Lp(){let e=xl(4242),t=[],n=[],r=[],i=new P(`#5f7a45`),a=new P(`#d9c48a`),o=new P;for(let[s,c,l]of oi)for(let u=0;u<90;u++){let u=e()*Math.PI*2,d=e()*.1,f=l*(.6+e()*.5),p=.15+e()*.55,m=.006+e()*.004,h=Math.cos(u),g=Math.sin(u),_=t.length/3;for(let e=0;e<=4;e++){let l=e/4,u=d+p*f*l*l,v=f*(l-.25*p*l*l),y=m*(1-l*.85);for(let e of[-1,1])t.push(s+h*u-g*y*e,.02+v,c+g*u+h*y*e);o.copy(i).lerp(a,l**.7),n.push(o.r,o.g,o.b,o.r,o.g,o.b),e<4&&r.push(_+e*2,_+e*2+1,_+e*2+2,_+e*2+1,_+e*2+3,_+e*2+2)}}let s=new N;return s.setAttribute(`position`,new k(new Float32Array(t),3)),s.setAttribute(`color`,new k(new Float32Array(n),3)),s.setIndex(r),s.computeVertexNormals(),s}function Rp(e){let t=V.vegetaux.vent;e.uniforms.uTemps=q.uTime,e.vertexShader=(`uniform float uTemps;
`+e.vertexShader).replace(`#include <begin_vertex>`,`#include <begin_vertex>
    float phG = transformed.x * 0.37 + transformed.z * 0.23;
    float aG = ${(t.actif?.09*t.force:0).toFixed(4)} * transformed.y * transformed.y;
    transformed.x += sin(uTemps * ${(.9*t.vitesse).toFixed(3)} + phG) * aG;
    transformed.z += cos(uTemps * ${(.7*t.vitesse).toFixed(3)} + phG * 1.3) * aG * 0.7;`)}function zp(){let e=(0,U.useMemo)(()=>Br(`vie:graminees`,Lp),[]);return(0,K.jsx)(`mesh`,{geometry:e,castShadow:!0,receiveShadow:!0,children:(0,K.jsx)(`meshStandardMaterial`,{vertexColors:!0,roughness:1,side:2,onBeforeCompile:Rp,customProgramCacheKey:()=>`graminees`})})}function Bp(){let e=xl(977),t=[],n=[],r=[],i=[`#8a6a3c`,`#a58a4e`,`#6f6a3a`,`#b89a55`,`#5e5234`].map(e=>new P(e)),a=0;for(;a<150;){let o=-9.6+e()*13.2,s=-4.6+e()*9.2;if(o>-7.5&&o<1.5&&s>-2.5&&s<2.5)continue;let c=e()*Math.PI*2,l=.035+e()*.03,u=l*.38,d=Math.cos(c),f=Math.sin(c),p=.031+e()*.004,m=t.length/3;t.push(o+d*l,p,s+f*l,o-f*u,p+.004,s+d*u,o-d*l,p,s-f*l,o+f*u,p+.002,s-d*u);let h=i[Math.floor(e()*i.length)];for(let e=0;e<4;e++)n.push(h.r,h.g,h.b);r.push(m,m+1,m+2,m,m+2,m+3),a++}let o=new N;return o.setAttribute(`position`,new k(new Float32Array(t),3)),o.setAttribute(`color`,new k(new Float32Array(n),3)),o.setIndex(r),o.computeVertexNormals(),o}function Vp(){let e=(0,U.useMemo)(()=>Bp(),[]);return(0,K.jsx)(`mesh`,{geometry:e,receiveShadow:!0,children:(0,K.jsx)(`meshStandardMaterial`,{vertexColors:!0,roughness:.9,side:2})})}function Hp(){return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(Pp,{position:[-4.45,.025,3.72]}),(0,K.jsx)(Fp,{position:[-3.8,.4,3],rotation:0}),(0,K.jsx)(Ip,{position:[-.9,mr,-.8]}),(0,K.jsx)(zp,{}),(0,K.jsx)(Vp,{})]})}var Up=[[`canaries-grand`,5.6,-6.6,1.25,.4],[`canaries`,-13.6,9.2,1,2.6],[`washingtonia-grand`,-10.6,6.2,1.2,1.2],[`eventail`,6.4,7.4,1,4.1],[`dattier`,8.6,1.6,1,.9]],Wp={"canaries-grand":[`canaries`,1.55],"washingtonia-grand":[`dattier`,1.5],eventail:[`dattier`,1.15]},Gp=B===`haute`?Up:Up.map(([e,t,n,r,i])=>Wp[e]?[Wp[e][0],t,n,Wp[e][1],i]:[e,t,n,r,i]),Kp=V.vegetaux.vent,qp=e=>e.toFixed(4);function Jp(e){e.uniforms.uTemps=q.uTime,e.vertexShader=(`uniform float uTemps;
`+e.vertexShader).replace(`#include <project_vertex>`,`vec4 mPalme = modelMatrix * vec4(transformed, 1.0);
    // même onde que le reste du jardin (Jardin.tsx, matiereFeuilles) ; rien ne bouge sous 60 cm
    float phP = mPalme.x * 0.37 + mPalme.z * 0.23;
    float hP = smoothstep(0.6, 4.5, mPalme.y);
    float aP = ${qp(Kp.actif?.05*Kp.force:0)} * hP;
    mPalme.x += sin(uTemps * ${qp(.9*Kp.vitesse)} + phP) * aP;
    mPalme.z += cos(uTemps * ${qp(.7*Kp.vitesse)} + phP * 1.3) * aP * 0.7;
    mPalme.y += sin(uTemps * ${qp(1.7*Kp.vitesse)} + phP * 2.1) * aP * 0.35;
    vec4 mvPosition = viewMatrix * mPalme;
    gl_Position = projectionMatrix * mvPosition;`)}function Yp({nom:e,x:t,z:n,echelle:r,tour:i}){let{scene:a}=u(`/agr-piscine-confidentialite/demo-3d/models/decor/palmier-${e}.glb`),o=(0,U.useMemo)(()=>{let e=a.clone(!0);return e.traverse(e=>{if(!(e instanceof je))return;e.castShadow=!0,e.receiveShadow=!0;let t=e.material.clone();B===`haute`&&(t.onBeforeCompile=Jp),B===`haute`&&(t.customProgramCacheKey=()=>`palme-au-vent`),e.material=t}),p(e),e},[a]);return(0,U.useEffect)(()=>(ea(600),()=>o.traverse(e=>{e instanceof je&&e.material.dispose()})),[o]),(0,K.jsx)(`primitive`,{object:o,position:[t,0,n],scale:r,rotation:[0,i,0]})}function Xp(){return(0,K.jsx)(K.Fragment,{children:Gp.map(([e,t,n,r,i],a)=>(0,K.jsx)(U.Suspense,{fallback:null,children:(0,K.jsx)(Yp,{nom:e,x:t,z:n,echelle:r,tour:i})},a))})}function Zp(e,t,n,r){let i=xl(r),a=[i()*6.28,i()*6.28,i()*6.28],o=[e.x,n,e.z],s=[e.x,e.z],c=[];for(let r=0;r<72;r++){let i=r/72*Math.PI*2,l=1+.035*Math.sin(i*2+a[0])+.025*Math.sin(i*3+a[1])+.015*Math.sin(i*5+a[2]),u=e.x+Math.cos(i)*(e.rx*l+t),d=e.z+Math.sin(i)*(e.rz*l+t);o.push(u,n,d),s.push(u,d),c.push(0,1+(r+1)%72,1+r)}let l=new N;return l.setAttribute(`position`,new k(new Float32Array(o),3)),l.setAttribute(`uv`,new k(new Float32Array(s),2)),l.setIndex(c),l.computeVertexNormals(),l}var Qp={galets:new P(1.85,1.85,1.8),pouzzolane:new P(.92,.36,.26)};function $p(){let e=Jr(`gravier`),t=(0,U.useMemo)(()=>{let e=(e,t)=>{let n=ei.map((e,t)=>[e,t]).filter(([n])=>n.sol===e&&!!n.dessus===t);return n.length?J(n.map(([e,n])=>Zp(e,0,t?.016:.01,100+n))):null},t=J(ei.filter(e=>!e.dessus).map((e,t)=>Zp(e,.07,.006,100+t)));return{galets:e(`galets`,!1),pouzzolane:e(`pouzzolane`,!1),galetsDessus:e(`galets`,!0),pouzzolaneDessus:e(`pouzzolane`,!0),bordure:t}},[]),n=t=>(0,K.jsx)(`meshStandardMaterial`,{...e,color:Qp[t],...Yr(`gravier`)});return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(`mesh`,{geometry:t.bordure,receiveShadow:!0,children:(0,K.jsx)(`meshStandardMaterial`,{color:`#3a3531`,roughness:.7,metalness:.3})}),t.galets&&(0,K.jsx)(`mesh`,{geometry:t.galets,receiveShadow:!0,children:n(`galets`)}),t.pouzzolane&&(0,K.jsx)(`mesh`,{geometry:t.pouzzolane,receiveShadow:!0,children:n(`pouzzolane`)}),t.galetsDessus&&(0,K.jsx)(`mesh`,{geometry:t.galetsDessus,receiveShadow:!0,children:n(`galets`)}),t.pouzzolaneDessus&&(0,K.jsx)(`mesh`,{geometry:t.pouzzolaneDessus,receiveShadow:!0,children:n(`pouzzolane`)})]})}var em=[`rock9`,`bloc3`];function tm({modele:e,places:t}){let{scene:n}=u(`/agr-piscine-confidentialite/demo-3d/models/decor/rocher-${e}.glb`),r=(0,U.useRef)(null),{geometrie:i,matiere:a,boite:o,pose:s}=(0,U.useMemo)(()=>{n.updateMatrixWorld(!0);let e=null;n.traverse(t=>{!e&&t instanceof je&&(e=t)});let t=e,r=t.material.clone();return r.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace(`#include <map_fragment>`,`#include <map_fragment>
        float grisR = dot(diffuseColor.rgb, vec3(0.3, 0.59, 0.11));
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(grisR), 0.6) * vec3(2.0, 1.94, 1.8);`)},r.customProgramCacheKey=()=>`rocher-clair`,r.roughness=1,r.metalness=0,{geometrie:t.geometry,matiere:r,boite:new T().setFromObject(t),pose:t.matrixWorld.clone()}},[n]);return(0,U.useEffect)(()=>()=>a.dispose(),[a]),(0,U.useLayoutEffect)(()=>{let e=r.current;if(!e)return;let n=o.getSize(new j),i=o.getCenter(new j),a=Math.max(n.x,n.z),c=new L,l=new L,u=new A,d=new nt;t.forEach(([t,r,f,p,m],h)=>{let g=xl(700+m),_=2.3*f/a,v=_*(1.25+g()*.45);u.setFromEuler(d.set((g()-.5)*.3,p,(g()-.5)*.3)),c.compose(new j(t,(-o.min.y-n.y*.24)*v,r),u,new j(_,v,_)),l.makeTranslation(-i.x,0,-i.z),e.setMatrixAt(h,c.multiply(l).multiply(s))}),e.instanceMatrix.needsUpdate=!0,e.computeBoundingSphere(),ea(600)},[t,o,s]),(0,K.jsx)(`instancedMesh`,{ref:r,args:[i,a,t.length],castShadow:!0,receiveShadow:!0})}function nm(){let e=(0,U.useMemo)(()=>em.map((e,t)=>ri.map(([e,t,n,r],i)=>[e,t,n,r,i]).filter((e,n)=>n%em.length===t)),[]);return ri.length?(0,K.jsx)(K.Fragment,{children:em.map((t,n)=>(0,K.jsx)(U.Suspense,{fallback:null,children:(0,K.jsx)(tm,{modele:t,places:e[n]})},t))}):null}function rm(){let e=(0,U.useMemo)(()=>{let e=[],t=[],n=[],r=new P;if(ii.forEach(([i,a,o,s],c)=>{let l=xl(900+c),u=s===`agave`,d=new P(u?`#4f6f63`:`#3c6130`),f=new P(u?`#9db7aa`:`#86a85a`),p=u?26:46;for(let s=0;s<p;s++){let c=s/p,m=s*2.39996+l()*.3,h=o*(u?.75+.5*c:.9+.5*l()),g=h*(u?.2:.055),_=(u?1.25:1.45)-c*(u?1:1.2),v=u?.5*c:.9*c,y=Math.cos(m),b=Math.sin(m),x=e.length/3;for(let o=0;o<=5;o++){let s=o/5,l=_-v*s*s,u=h*s*Math.cos(l)*(1-.15*s),p=.03+h*(Math.sin(_)*s-.5*v*s*s),m=g*Math.sin(Math.min(1,s*1.6+.25)*Math.PI*.5)*(1-s*s)+.002;for(let t of[-1,0,1])e.push(i+y*u-b*m*t,p+Math.abs(t)*m*.35,a+b*u+y*m*t);r.copy(d).lerp(f,s**.8).multiplyScalar(.85+.25*(1-c));for(let e=0;e<3;e++)t.push(r.r,r.g,r.b);if(o<5){let e=x+o*3;n.push(e,e+1,e+3,e+1,e+4,e+3,e+1,e+2,e+4,e+2,e+5,e+4)}}}}),!e.length)return null;let i=new N;return i.setAttribute(`position`,new k(new Float32Array(e),3)),i.setAttribute(`color`,new k(new Float32Array(t),3)),i.setIndex(n),i.computeVertexNormals(),i},[]);return e?(0,K.jsx)(`mesh`,{geometry:e,castShadow:!0,receiveShadow:!0,children:(0,K.jsx)(`meshStandardMaterial`,{vertexColors:!0,roughness:.6,side:2})}):null}function im(){let e=(0,U.useMemo)(()=>{let e=[],t=[],n=[],r=new P,i=new P(`#2f5a2c`),a=new P(`#5f9440`),o=new P(`#4f7a3a`),s=new P(`#4a56b4`),c=new P(`#8590e0`);if(si.forEach(([l,u,d],f)=>{let p=xl(1300+f);for(let o=0;o<34;o++){let o=p()*Math.PI*2,s=d*(.36+p()*.2),c=1.35-p()*.75,f=1.1+p()*.9,m=Math.cos(o),h=Math.sin(o),g=e.length/3;for(let o=0;o<=5;o++){let _=o/5,v=c-f*_*_,y=s*_*Math.max(.25,Math.cos(v*.6)),b=Math.max(.025,.03+s*(Math.sin(c)*_-.45*f*_*_)),x=.016*d*(1-_*_*.85)+.002;for(let t of[-1,1])e.push(l+m*y-h*x*t,b,u+h*y+m*x*t);if(r.copy(i).lerp(a,_).multiplyScalar(.85+p()*.3),t.push(r.r,r.g,r.b,r.r,r.g,r.b),o<5){let e=g+o*2;n.push(e,e+1,e+2,e+1,e+3,e+2)}}}let m=3+Math.floor(p()*3);for(let i=0;i<m;i++){let i=p()*Math.PI*2,a=p()*.1*d,f=d*(.6+p()*.25),m=l+Math.cos(i)*a,h=u+Math.sin(i)*a,g=m+Math.cos(i)*.1*f,_=h+Math.sin(i)*.1*f;for(let[r,i]of[[.006,0],[0,.006]]){let a=e.length/3;e.push(m-r,.03,h-i,m+r,.03,h+i,g-r,f,_-i,g+r,f,_+i);for(let e=0;e<4;e++)t.push(o.r,o.g,o.b);n.push(a,a+1,a+2,a+1,a+3,a+2)}let v=.075*d;for(let i=0;i<26;i++){let i=Math.acos(1-1.45*p()),a=p()*Math.PI*2,o=Math.sin(i)*Math.cos(a),l=Math.cos(i),u=Math.sin(i)*Math.sin(a),m=g+o*v,h=f+l*v,y=_+u*v,b=-u,x=o,S=Math.hypot(b,x)||1,C=b/S,w=x/S,T=l*w,E=u*C-o*w,D=-l*C,O=.02*d,ee=e.length/3;e.push(m+C*O,h,y+w*O,m+T*O,h+E*O,y+D*O,m-C*O,h,y-w*O,m-T*O,h-E*O,y-D*O),r.copy(s).lerp(c,p()*.8);for(let e=0;e<4;e++)t.push(r.r,r.g,r.b);n.push(ee,ee+1,ee+2,ee,ee+2,ee+3)}}}),!e.length)return null;let l=new N;return l.setAttribute(`position`,new k(new Float32Array(e),3)),l.setAttribute(`color`,new k(new Float32Array(t),3)),l.setIndex(n),l.computeVertexNormals(),l},[]);return e?(0,K.jsx)(`mesh`,{geometry:e,castShadow:!0,receiveShadow:!0,children:(0,K.jsx)(`meshStandardMaterial`,{vertexColors:!0,roughness:.7,side:2})}):null}var am={forme:`lanceole`,tons:[`#22401f`,`#3a6230`,`#5f8a45`],taille:[.2,.3],vent:.005,densite:95,releve:[.3,.9],profondeur:[-.25,.25]};function om(){let{coeur:e,feuilles:t,fleurs:n}=(0,U.useMemo)(()=>{let e=new P(`#16281a`),t=new P(`#3f6a34`),n=new P,r=[],i=[],a=[],o=[];if(ci.forEach(([s,c,l,u],d)=>{let f=xl(1700+d),p=u?new P(`#c9487c`):new P(`#d9d4c8`),m=[[0,0,1],...[0,1,2,3].map(e=>[Math.cos(e*1.57+f())*.42,Math.sin(e*1.57+f())*.42,.72+f()*.2])];for(let[u,d,h]of m){let m=new fe(1,2),g=m.attributes.position,_=new Float32Array(g.count*3),v=f()*30,y=new j;for(let r=0;r<g.count;r++){y.fromBufferAttribute(g,r);let m=.85+.3*Math.sin(y.x*3.3+v)*Math.sin(y.y*2.9+v*1.7)*Math.sin(y.z*3.1+v*.6),b=(.78+y.y*.66*m)*l*h;if(g.setXYZ(r,s+(u+y.x*.5*m*h)*l,Math.max(.04,b),c+(d+y.z*.5*m*h)*l),n.copy(e).lerp(t,Math.min(1,Math.max(0,b/(1.4*l)))).multiplyScalar(.9+f()*.2),_.set([n.r,n.g,n.b],r*3),y.y>.25&&f()<.16){let e=s+(u+y.x*.56*m*h)*l,t=b+.04,r=c+(d+y.z*.56*m*h)*l;for(let s=0;s<4;s++){let s=f()*Math.PI*2,c=.03+f()*.02,l=e+(f()-.5)*.09,u=t+(f()-.5)*.07,d=r+(f()-.5)*.09,m=i.length/3;i.push(l+Math.cos(s)*c,u+c*.5,d+Math.sin(s)*c,l-Math.sin(s)*c,u+y.y*c,d+Math.cos(s)*c,l-Math.cos(s)*c,u-c*.5,d-Math.sin(s)*c,l+Math.sin(s)*c,u-y.y*c,d-Math.cos(s)*c),n.copy(p).multiplyScalar(.8+f()*.4);for(let e=0;e<4;e++)a.push(n.r,n.g,n.b);o.push(m,m+1,m+2,m,m+2,m+3)}}}m.setAttribute(`color`,new k(_,3)),m.deleteAttribute(`uv`),m.computeVertexNormals(),r.push(m)}}),!r.length)return{coeur:null,feuilles:null,fleurs:null};let s=J(r),c=Si(s,am,`#3f6a34`,41),l=s.attributes.color;for(let e=0;e<l.count;e++)l.setXYZ(e,l.getX(e)*.55,l.getY(e)*.55,l.getZ(e)*.55);let u=new N;return u.setAttribute(`position`,new k(new Float32Array(i),3)),u.setAttribute(`color`,new k(new Float32Array(a),3)),u.setIndex(o),u.computeVertexNormals(),{coeur:s,feuilles:c,fleurs:u}},[]),r=(0,U.useMemo)(()=>bi(am,41),[]),i=(0,U.useMemo)(()=>wi(am.vent),[]);if(!e||!t||!n)return null;let a=V.vegetaux.clarteFeuilles*vi,o=V.vegetaux.reliefFeuilles;return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(`mesh`,{geometry:e,castShadow:!0,receiveShadow:!0,children:(0,K.jsx)(`meshStandardMaterial`,{vertexColors:!0,roughness:1})}),(0,K.jsx)(`mesh`,{geometry:t,receiveShadow:!0,children:(0,K.jsx)(`meshStandardMaterial`,{map:r.map,normalMap:r.normal,normalScale:[o,o],color:[a,a,a],vertexColors:!0,alphaTest:.5,alphaToCoverage:!0,side:2,roughness:.5,metalness:0,onBeforeCompile:i,customProgramCacheKey:()=>`feuilles-3-${am.vent}`})}),(0,K.jsx)(`mesh`,{geometry:n,receiveShadow:!0,children:(0,K.jsx)(`meshStandardMaterial`,{vertexColors:!0,roughness:.8,side:2})})]})}function sm(){return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)($p,{}),(0,K.jsx)(nm,{}),!$r&&(0,K.jsx)(rm,{}),(0,K.jsx)(im,{}),!$r&&(0,K.jsx)(om,{})]})}var cm=B===`haute`;function lm(e,t=1){let{scene:n}=u(`/agr-piscine-confidentialite/demo-3d/models/decor/${e}.glb`),r=(0,U.useMemo)(()=>{n.updateMatrixWorld(!0);let e=[];return n.traverse(n=>{if(!(n instanceof je))return;let r=n.material.clone();(r.transparent||r.alphaTest>0)&&(r.transparent=!1,r.alphaTest=.3,r.alphaToCoverage=cm,r.depthWrite=!0),r.side=2,r.metalness=0,typeof t==`number`?r.color.multiplyScalar(t):r.color.multiply(new P(...t)),e.push({geometrie:n.geometry,matiere:r,pose:n.matrixWorld.clone()})}),{morceaux:e,boite:new T().setFromObject(n)}},[n,t]);return(0,U.useEffect)(()=>()=>r.morceaux.forEach(e=>e.matiere.dispose()),[r]),r}function um({modele:e,places:t,enfonce:n=0,clarte:r=1,etroit:i=1}){let a=(0,U.useRef)([]),{morceaux:o,boite:s}=lm(e,r);return(0,U.useLayoutEffect)(()=>{let e=s.getSize(new j),r=s.getCenter(new j),c=new L,l=new L().makeTranslation(-r.x,-s.min.y,-r.z),u=new A,d=new j(0,1,0),f=t.map(([t,r,a,o])=>{let s=a/e.y;return u.setFromAxisAngle(d,o),new L().compose(new j(t,-n*a,r),u,new j(s*i,s,s*i)).multiply(l)});o.forEach((e,t)=>{let n=a.current[t];n&&(f.forEach((t,r)=>n.setMatrixAt(r,c.copy(t).multiply(e.pose))),n.instanceMatrix.needsUpdate=!0,n.computeBoundingSphere())}),ea(600)},[t,o,s,n,i]),(0,K.jsx)(K.Fragment,{children:o.map((e,n)=>(0,K.jsx)(`instancedMesh`,{ref:e=>void(a.current[n]=e),args:[e.geometrie,e.matiere,t.length],castShadow:!0,receiveShadow:!0},n))})}var dm=[[-11,-5.5,4.3,.6],[3.4,-6.2,3.7,2.4],[-13,3.5,3.5,4.1],[-22.5,-15,5,2.1],[-23.5,6,4.3,4.6],[16,-15.5,4.7,.7],[17.5,4.5,3.9,3.3],[-19,33,4.9,5.4],[15.5,35,4.5,1.6],[-24,22,3.7,2.9]],fm=[...li,...ai].map(([e,t,n],r)=>[e,t,n*2.1,r*2.4]).concat(cm?[]:ci.map(([e,t,n],r)=>[e,t,1.4*n,r*1.9])),pm=e=>cm&&e%3==1,mm=ii.filter(e=>!cm||e[3]===`yucca`).map(([e,t,n],r)=>[e,t,n*2.1,r*1.7]),hm=ii.filter(e=>e[3]===`agave`),gm=hm.filter((e,t)=>cm&&t%2==0).map(([e,t,n],r)=>[e,t,n*1.7,r*2.1]),_m=hm.filter((e,t)=>cm&&t%2==1).map(([e,t,n],r)=>[e,t,n*2.6,r*1.3]),vm=ci.map(([e,t,n],r)=>[e,t,1.5*n,r*1.9]),ym=ji.map(([e,t,n],r)=>[e,t,n,r*2.3]),bm=Ni.map((e,t)=>[e.c[0],e.c[2],1.9*e.r[0],t*1.7]),xm=[[`cypres`,ym.concat(jl.cypres),.01,[.92,1.05,.78],.62],[`lavande`,bm,.04,[1.3,1.02,.86]],[`olivier-vieux`,cm?dm.concat(jl.oliviers):dm.slice(0,3).concat(jl.oliviers.slice(0,1)),.02,2.1],[`arbuste-oranger`,fm.filter((e,t)=>cm?!pm(t):t%2==0).concat(jl.arbustes.filter((e,t)=>cm||t%2==0)),.03,1.35],[`arbuste-oranger-fleurs`,fm.filter((e,t)=>pm(t)),.03,1.2],[`yucca-bleu`,mm.concat(jl.yuccas)],[`cycas`,gm],[`yucca`,_m],[`hibiscus`,vm.filter((e,t)=>cm&&t!==2).concat(cm?jl.fleuris:[]),0,1.3],[`callistemon`,vm.filter((e,t)=>cm&&t===2)]];function Sm(){let e=(0,U.useRef)([]),{morceaux:t,boite:n}=lm(`haie-large`,1.15),r=(0,U.useMemo)(()=>{let{x0:e,x1:t,z0:r,z1:i}=Y,a=n.getSize(new j),o=n.getCenter(new j),s=new L().makeTranslation(-o.x,-n.min.y,-o.z),c=new A,l=new j(0,1,0),u=[],d=(e,t,n,r)=>{let i=Math.hypot(n-e,r-t)+.9,o=Math.round(i/4),d=i/o,f=(n-e)/(i-.9),p=(r-t)/(i-.9);c.setFromAxisAngle(l,Math.atan2(-p,f));for(let n=0;n<o;n++){let r=-.45+d*(n+.5);u.push(new L().compose(new j(e+f*r,0,t+p*r),c,new j(d/4,1.85/a.y,.95/a.z)).multiply(s))}};return d(e,r,t,r),d(e,r,e,i),d(t,r,t,i),u},[n]);return(0,U.useLayoutEffect)(()=>{let n=new L;t.forEach((t,i)=>{let a=e.current[i];a&&(r.forEach((e,r)=>a.setMatrixAt(r,n.copy(e).multiply(t.pose))),a.instanceMatrix.needsUpdate=!0,a.computeBoundingSphere())}),ea(600)},[r,t]),(0,K.jsx)(K.Fragment,{children:t.map((t,n)=>(0,K.jsx)(`instancedMesh`,{ref:t=>void(e.current[n]=t),args:[t.geometrie,t.matiere,r.length],castShadow:!0,receiveShadow:!0},n))})}function Cm(){return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(U.Suspense,{fallback:null,children:(0,K.jsx)(Sm,{})}),xm.filter(([,e])=>e.length).map(([e,t,n,r,i])=>(0,K.jsx)(U.Suspense,{fallback:null,children:(0,K.jsx)(um,{modele:e,places:t,enfonce:n,clarte:r,etroit:i})},e))]})}var wm=typeof matchMedia<`u`&&matchMedia(`(prefers-reduced-motion: reduce)`).matches,Tm={x:-1,y:.025,z:2.78,cap:Math.PI/2},Em=-1.5,Dm=.24,Om=(()=>{let e=[];return[-1.45,-.75,0,.75,1.45].forEach((t,n)=>{let r=[[-6.45,t],[-.55,t]];e.push(...n%2?r.reverse():r)}),[...e,...e.slice(1,-1).reverse()]})(),km=Om.map((e,t)=>{let n=Om[(t+1)%Om.length];return Math.hypot(n[0]-e[0],n[1]-e[1])}),Am=km.reduce((e,t)=>e+t,0),jm={position:new j(Tm.x,Tm.y,Tm.z)};function Mm({url:e}){let t=(0,U.useRef)(null),n=z(e=>e.selected===`robot`||e.tourStep!==null)||wm,r=(0,U.useRef)(Tm.cap);return I(({clock:e},i)=>{let a=t.current;if(a){if(n)a.position.set(Tm.x,Tm.y,Tm.z),a.rotation.y=r.current=Tm.cap;else{let t=e.elapsedTime*Dm%Am,n=0;for(;t>km[n];)t-=km[n++];let o=Om[n],s=Om[(n+1)%Om.length],c=t/km[n];a.position.set(o[0]+(s[0]-o[0])*c,Em,o[1]+(s[1]-o[1])*c);let l=Math.atan2(-(s[1]-o[1]),s[0]-o[0]),u=Math.atan2(Math.sin(l-r.current),Math.cos(l-r.current));r.current+=u*Math.min(1,i*2.5),a.rotation.y=r.current}jm.position.copy(a.position)}}),(0,K.jsx)(`group`,{ref:t,position:[Tm.x,Tm.y,Tm.z],rotation:[0,Tm.cap,0],children:(0,K.jsx)(Z,{url:e},e)})}var Nm=(e,t)=>{},Pm=je.prototype.raycast;function Fm(e,t,n,r,i,a=`xz`){let o=new xe(e,t,n),s=o.attributes.position,c=o.attributes.uv,l=o.attributes.normal;for(let e=0;e<s.count;e++){let t=s.getX(e)+r[0],n=s.getY(e)+r[1],o=s.getZ(e)+r[2];a===`xz`?c.setXY(e,...(Math.abs(l.getY(e))>.5?[t,o]:Math.abs(l.getX(e))>.5?[o,n]:[t,n]).map(e=>e/i)):c.setXY(e,(t+o)/i,n/i)}return o}function Im(e,t,n,r=n){let i=new ze(e,t),a=i.attributes.uv;for(let i=0;i<a.count;i++)a.setXY(i,a.getX(i)*e/n,a.getY(i)*t/r);return i}function Lm({trou:e,y:t,profondeur:n,xray:r,children:i}){let a=(0,U.useMemo)(()=>{let[r,i,a,o]=e,s=31.05,c=H?new E(Array.from({length:300},(e,t)=>{let n=t/300*Math.PI*2;return new F(Q.x+Math.cos(n)*s,-(Q.z+Math.sin(n)*s))})):new E([new F(-1800,-1800),new F(1800,-1800),new F(1800,1800),new F(-1800,1800)]);c.holes.push(new pe([new F(r,-a),new F(r,-o),new F(i,-o),new F(i,-a)]));let l=new $e(c);l.rotateX(-Math.PI/2),l.translate(0,t,0);let u=l.attributes.position,d=l.attributes.uv;for(let e=0;e<u.count;e++)d.setXY(e,u.getX(e),u.getZ(e));let f=[[r,a,i,a],[i,a,i,o],[i,o,r,o],[r,o,r,a]].map(([e,r,i,a])=>{let o=Math.hypot(i-e,a-r),s=new ze(o,n);return s.rotateY(Math.atan2(-(a-r),i-e)),s.translate((e+i)/2,t-n/2,(r+a)/2),s});return J([l.toNonIndexed(),...f.map(e=>e.toNonIndexed())])},[e,t,n]);return(0,K.jsx)(`mesh`,{geometry:a,receiveShadow:!0,raycast:r?Nm:Pm,onClick:e=>e.stopPropagation(),children:i})}function Rm({outer:e,inner:t,y0:n,y1:r,xray:i,children:a}){let o=(0,U.useMemo)(()=>Ns(e,t,n,r),[e,t,n,r]);return(0,U.useEffect)(()=>()=>o.dispose(),[o]),(0,K.jsx)(`mesh`,{geometry:o,receiveShadow:!0,raycast:i?Nm:Pm,onClick:e=>e.stopPropagation(),children:a})}function zm({outer:e,inner:t,y0:n,y1:r,tile:i,children:a,xray:o=!1,shadow:s=!0}){let[c,l,u,d]=e,[f,p,m,h]=t,g=r-n,_=(n+r)/2,v=(0,U.useMemo)(()=>[[c,f,u,d],[p,l,u,d],[f,p,u,m],[f,p,h,d]].map(([e,t,n,r])=>{let a=[(e+t)/2,_,(n+r)/2];return{c:a,g:Fm(t-e,g,r-n,a,i)}}),[c,l,u,d,f,p,m,h,g,_,i]);return(0,K.jsx)(`group`,{children:v.map((e,t)=>(0,K.jsx)(`mesh`,{position:e.c,geometry:e.g,receiveShadow:s,raycast:o?Nm:Pm,onClick:e=>e.stopPropagation(),children:a},t))})}var Bm=[-7,1,-2,2];function Vm(e){e.vertexShader=`varying vec3 vPosM;
`+e.vertexShader.replace(`#include <project_vertex>`,`#include <project_vertex>
  vPosM = (modelMatrix * vec4(transformed, 1.0)).xyz;`),e.fragmentShader=`varying vec3 vPosM;
    float mH(vec2 p) { return fract(sin(dot(p, vec2(41.3, 289.1))) * 43758.5); }
    float mN(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
      return mix(mix(mH(i), mH(i + vec2(1.0, 0.0)), f.x), mix(mH(i + vec2(0.0, 1.0)), mH(i + vec2(1.0, 1.0)), f.x), f.y); }
    float mouille() {
      vec2 d2 = max(vec2(${Bm[0].toFixed(2)}, ${Bm[2].toFixed(2)}) - vPosM.xz, vPosM.xz - vec2(${Bm[1].toFixed(2)}, ${Bm[3].toFixed(2)}));
      float dist = max(d2.x, d2.y);
      float bande = 1.0 - smoothstep(0.02, 0.13, dist + (mN(vPosM.xz * 5.0) - 0.5) * 0.1);
      float gouttes = smoothstep(0.74, 0.8, mN(vPosM.xz * 23.0)) * (1.0 - smoothstep(0.15, 0.55, dist)) * 0.5;
      return max(bande, gouttes);
    }
    `+e.fragmentShader.replace(`#include <map_fragment>`,`#include <map_fragment>
  float eauM = mouille();
  diffuseColor.rgb *= mix(vec3(1.0), vec3(0.4, 0.39, 0.37), eauM);`).replace(`#include <roughnessmap_fragment>`,`#include <roughnessmap_fragment>
  roughnessFactor = mix(roughnessFactor, 0.5, eauM);`)}var Hm=V.matieres.margelles,Um=.33,Wm=[[20,350,-3,211],[350,663,-3,211],[663,1044,-3,211],[61,475,211,455],[475,710,211,455],[710,1085,211,455],[314,605,455,698],[605,936,455,698],[936,1338,455,698],[67,321,698,1021],[321,580,698,1021],[580,836,698,1021],[836,1091,698,1021]];function Gm(){let[e,t,n,r]=Bm,i=Hm.longueur,a=Um,o=[];for(let s of[n-a/2,r+a/2])for(let n=e;n<t-1e-6;n+=i)o.push({cx:n+i/2,cz:s,lx:i,lz:a});for(let s of[e-a/2,t+a/2])for(let e=n;e<r-1e-6;e+=i)o.push({cx:s,cz:e+i/2,lx:a,lz:i});for(let i of[e-a/2,t+a/2])for(let e of[n-a/2,r+a/2])o.push({cx:i,cz:e,lx:a,lz:a});let s=.045,c=Hm.taille,l=11,u=()=>(l=l*16807%2147483647)/2147483647,d=o.map((e,t)=>{let n=e.lx-Hm.joint,r=e.lz-Hm.joint,i=new wc(n,s,r,2,Hm.arrondi),a=Math.max(n,r),o=Math.min(n,r),[l,d,f,p]=Wm[(t*7+3)%Wm.length],m=a/c*1024,h=o/c*1024,g=(l+14+u()*Math.max(0,d-l-28-m))/1024,_=1-(p-14-u()*Math.max(0,p-f-28-h))/1024,v=u()<.5,y=i.attributes.position,b=i.attributes.normal,x=i.attributes.uv,S=n>=r;for(let e=0;e<y.count;e++){let t=y.getX(e),i=y.getY(e),l=y.getZ(e),u=Math.abs(b.getX(e)),d=Math.abs(b.getY(e)),f=Math.abs(b.getZ(e)),p=S?t+n/2:l+r/2,m=S?l+r/2:t+n/2,h=p,C=m;d<Math.max(u,f)&&(h=(S?f>u:u>f)?p:S?l+r/2:t+n/2,C=i+s/2),v&&([h,C]=[a-h,o-C]),x.setXY(e,g*c+h,_*c+C)}return i.translate(e.cx,.105/2,e.cz),i}),f=J(d);return d.forEach(e=>e.dispose()),f}function Km({xray:e,fade:t}){let n=Jr(`margelles`),r=(0,U.useMemo)(()=>Br(`world:margelles`,Gm),[]),[i,a,o,s]=Bm,c=Um;return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(`mesh`,{geometry:r,castShadow:!0,receiveShadow:!0,raycast:e?Nm:Pm,onClick:e=>e.stopPropagation(),children:(0,K.jsx)(`meshStandardMaterial`,{...n,...t(.3),...Yr(`margelles`,H?Vm:void 0)},String(e))}),(0,K.jsx)(zm,{outer:[i-c,a+c,o-c,s+c],inner:Bm,y0:.025,y1:.034,tile:1,xray:e,shadow:!0,children:(0,K.jsx)(`meshStandardMaterial`,{color:`#9b9488`,roughness:.95,...t(.3)},String(e))})]})}var qm=1.5,Jm=[Bm[0]-.04,Bm[1]+.04,Bm[2]-.04,Bm[3]+.04],Ym=[-8.8,2.8,-3.9,3.9];function Xm(){let e=z(e=>e.xray),t=Jr(`pelouse`),n=Jr(`plage`),r=t=>({transparent:e,opacity:e?t:1,depthWrite:!e});return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(Lm,{trou:Jm,y:sl,profondeur:2.6,xray:e,children:(n=>(0,K.jsx)(`meshStandardMaterial`,{...t,...r(n),fog:H,...Yr(`pelouse`,ql)},String(e)))(.15)}),H&&(0,K.jsxs)(`mesh`,{position:[0,-2.63,0],rotation:[-Math.PI/2,0,0],raycast:Nm,children:[(0,K.jsx)(`planeGeometry`,{args:[212,212]}),(0,K.jsx)(`meshStandardMaterial`,{color:`#8a8275`,roughness:1,metalness:0})]}),(0,K.jsx)(Rm,{outer:Ym,inner:Jm,y0:-.01,y1:.025,xray:e,children:(0,K.jsx)(`meshStandardMaterial`,{...n,...r(.25),...Yr(`plage`)},String(e))}),(0,K.jsx)(Km,{xray:e,fade:r})]})}function Zm(){let e=z(e=>e.pool.liner),t=Ac(e),n=e===`coque`?4:1.2,[r,i,a,o]=Bm,s=i-r,c=o-a,l=(r+i)/2,u=(0,U.useMemo)(()=>({floor:Im(s,c,n),long:Im(s,qm,n),short:Im(c,qm,n),frise:Im(s,.15,.6,.15),friseS:Im(c,.15,.6,.15)}),[s,c,n]),d=(0,K.jsx)(`meshStandardMaterial`,{map:t,roughness:e===`coque`?.25:.55,side:2,onBeforeCompile:Dr,customProgramCacheKey:()=>`caustiques`});return(0,K.jsxs)(X,{id:`bassin`,children:[(0,K.jsx)(`mesh`,{position:[l,-1.5,0],rotation:[-Math.PI/2,0,0],geometry:u.floor,receiveShadow:!0,children:d}),(0,K.jsx)(`mesh`,{position:[l,-1.5/2,a],geometry:u.long,receiveShadow:!0,children:d}),(0,K.jsx)(`mesh`,{position:[l,-1.5/2,o],rotation:[0,Math.PI,0],geometry:u.long,receiveShadow:!0,children:d}),(0,K.jsx)(`mesh`,{position:[r,-1.5/2,0],rotation:[0,Math.PI/2,0],geometry:u.short,receiveShadow:!0,children:d}),(0,K.jsx)(`mesh`,{position:[i,-1.5/2,0],rotation:[0,-Math.PI/2,0],geometry:u.short,receiveShadow:!0,children:d}),e!==`coque`&&(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(`mesh`,{position:[l,-.09,a+.004],geometry:u.frise,children:(0,K.jsx)(`meshStandardMaterial`,{map:jc()})}),(0,K.jsx)(`mesh`,{position:[l,-.09,o-.004],rotation:[0,Math.PI,0],geometry:u.frise,children:(0,K.jsx)(`meshStandardMaterial`,{map:jc()})}),(0,K.jsx)(`mesh`,{position:[r+.004,-.09,0],rotation:[0,Math.PI/2,0],geometry:u.friseS,children:(0,K.jsx)(`meshStandardMaterial`,{map:jc()})}),(0,K.jsx)(`mesh`,{position:[i-.004,-.09,0],rotation:[0,-Math.PI/2,0],geometry:u.friseS,children:(0,K.jsx)(`meshStandardMaterial`,{map:jc()})})]})]})}var Qm=`#f4f5f6`;function $m({couleur:e=Qm}){let t=V.matieres.abs;return(0,K.jsx)(`meshStandardMaterial`,{color:e,roughness:t.rugosite,normalMap:_(2,2),normalScale:[t.relief,t.relief]})}function eh({x:e}){return(0,K.jsxs)(`group`,{children:[(0,K.jsxs)(`mesh`,{position:[e,-.15,-2.14],castShadow:!0,children:[(0,K.jsx)(`boxGeometry`,{args:[.52,.24,.28]}),(0,K.jsx)($m,{})]}),(0,K.jsxs)(`mesh`,{position:[e,-.15,-2],children:[(0,K.jsx)(`boxGeometry`,{args:[.44,.16,.012]}),(0,K.jsx)(`meshStandardMaterial`,{color:`#0b1220`})]}),(0,K.jsxs)(`mesh`,{position:[e,-.12,-2.03],rotation:[.35,0,0],children:[(0,K.jsx)(`boxGeometry`,{args:[.38,.12,.01]}),(0,K.jsx)($m,{couleur:`#e5e7eb`})]}),(0,K.jsxs)(`mesh`,{position:[e,.035,-2.62],receiveShadow:!0,children:[(0,K.jsx)(`cylinderGeometry`,{args:[.18,.18,.035,32]}),(0,K.jsx)(`meshStandardMaterial`,{color:`#d6d3cc`,roughness:.6})]})]})}function th(){let e=(0,U.useMemo)(()=>{let e=e=>new Se(new ce([new j(0,.03,2.55),new j(0,.7,2.45),new j(0,.85,2.15),new j(0,.6,1.95),new j(0,-.9,1.93)].map(t=>new j(t.x+e,t.y,t.z))),48,.022,10,!1);return[e(-.24),e(.24)]},[]);return(0,K.jsxs)(`group`,{position:[-6,0,0],children:[e.map((e,t)=>(0,K.jsx)(`mesh`,{geometry:e,castShadow:!0,children:(0,K.jsx)(`meshStandardMaterial`,{color:`#e5e7eb`,metalness:1,roughness:.15})},t)),[-.3,-.6,-.9].map(e=>(0,K.jsxs)(`mesh`,{position:[0,e,1.9],castShadow:!0,children:[(0,K.jsx)(`boxGeometry`,{args:[.46,.03,.09]}),(0,K.jsx)(`meshStandardMaterial`,{color:`#e5e7eb`,metalness:.9,roughness:.25})]},e))]})}var nh={skimmers:[-1,1],under:0,returns:[-1.5,-.6,.3],balai:-3},rh=`#eceeeb`;function ih(){let e=(0,U.useMemo)(()=>{let e=[];for(let t=0;t<8;t++){let n=t/8*Math.PI*2,r=(e,t)=>new j(Math.cos(n)*e,Math.sin(n)*e,t);e.push(new Se(new ce([r(.096,.012),r(.088,.03),r(.068,.046),r(.04,.056),r(.026,.058)]),16,.0075,8))}return e},[]),t=(e,t,n)=>(0,K.jsxs)(`mesh`,{position:[0,0,t],children:[(0,K.jsx)(`torusGeometry`,{args:[e,n,8,48]}),(0,K.jsx)(`meshStandardMaterial`,{color:rh,roughness:.42})]});return(0,K.jsxs)(`group`,{children:[(0,K.jsxs)(`mesh`,{position:[0,0,.006],rotation:[Math.PI/2,0,0],children:[(0,K.jsx)(`cylinderGeometry`,{args:[.105,.108,.012,48,1,!0]}),(0,K.jsx)(`meshStandardMaterial`,{color:rh,roughness:.42,side:2})]}),t(.1,.012,.009),(0,K.jsxs)(`mesh`,{position:[0,0,.004],children:[(0,K.jsx)(`torusGeometry`,{args:[.104,.005,6,48]}),(0,K.jsx)(`meshStandardMaterial`,{color:`#15181b`,roughness:.8})]}),(0,K.jsxs)(`mesh`,{position:[0,0,.003],children:[(0,K.jsx)(`circleGeometry`,{args:[.094,40]}),(0,K.jsx)(`meshStandardMaterial`,{color:`#1b252d`,roughness:.9})]}),t(.084,.034,.0068),t(.06,.049,.0062),e.map((e,t)=>(0,K.jsx)(`mesh`,{geometry:e,children:(0,K.jsx)(`meshStandardMaterial`,{color:rh,roughness:.42})},t)),(0,K.jsxs)(`mesh`,{position:[0,0,.056],rotation:[Math.PI/2,0,0],children:[(0,K.jsx)(`cylinderGeometry`,{args:[.034,.036,.008,32]}),(0,K.jsx)(`meshStandardMaterial`,{color:rh,roughness:.38})]})]})}function ah(){let e=z(e=>e.pool.liner===`coque`);return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(X,{id:`skimmer`,children:nh.skimmers.map(e=>(0,K.jsx)(`group`,{position:[-5,0,e],rotation:[0,Math.PI/2,0],children:(0,K.jsx)(eh,{x:0})},e))}),(0,K.jsx)(X,{id:`bonde`,children:(0,K.jsx)(`group`,{position:[-7,-1.3,nh.under],rotation:[0,Math.PI/2,0],children:(0,K.jsx)(ih,{})})}),(0,K.jsxs)(X,{id:`prise-balai`,children:[(0,K.jsxs)(`mesh`,{position:[nh.balai,-.35,-1.985],rotation:[Math.PI/2,0,0],children:[(0,K.jsx)(`cylinderGeometry`,{args:[.075,.085,.04,24]}),(0,K.jsx)($m,{})]}),(0,K.jsxs)(`mesh`,{position:[nh.balai,-.35,-1.96],rotation:[Math.PI/2,0,0],children:[(0,K.jsx)(`cylinderGeometry`,{args:[.035,.035,.02,20]}),(0,K.jsx)(`meshStandardMaterial`,{color:`#1f2937`})]})]}),(0,K.jsx)(X,{id:`refoulement`,children:nh.returns.map(e=>(0,K.jsxs)(`group`,{position:[.98,-.3,e],children:[(0,K.jsxs)(`mesh`,{rotation:[0,0,-Math.PI/2],children:[(0,K.jsx)(`cylinderGeometry`,{args:[.07,.085,.04,24]}),(0,K.jsx)($m,{})]}),(0,K.jsxs)(`mesh`,{position:[-.03,0,0],children:[(0,K.jsx)(`sphereGeometry`,{args:[.045,20,14]}),(0,K.jsx)($m,{couleur:`#e2e8f0`})]})]},e))}),(0,K.jsxs)(X,{id:`projecteur`,children:[(0,K.jsxs)(`mesh`,{position:[-6.985,-.62,nh.under],rotation:[0,0,Math.PI/2],children:[(0,K.jsx)(`cylinderGeometry`,{args:[.15,.15,.03,32]}),(0,K.jsx)($m,{})]}),(0,K.jsxs)(`mesh`,{position:[-6.965,-.62,nh.under],rotation:[0,0,Math.PI/2],children:[(0,K.jsx)(`cylinderGeometry`,{args:[.1,.1,.012,32]}),(0,K.jsx)(`meshStandardMaterial`,{color:`#fef9c3`,emissive:`#fde68a`,emissiveIntensity:.6,userData:{keepEmissive:!0}})]})]}),!e&&(0,K.jsx)(th,{})]})}var oh=[[.95,-1.5],[.95,-.6],[.95,.3]],sh=typeof matchMedia<`u`&&matchMedia(`(prefers-reduced-motion: reduce)`).matches;function ch({url:e}){let t=(0,U.useRef)(null);return I(({clock:e})=>{if(!t.current||sh)return;let n=e.elapsedTime;t.current.position.y=mr+.004*Math.sin(n*1.3),t.current.rotation.x=.03*Math.sin(n*.9),t.current.rotation.z=.03*Math.cos(n*1.1),t.current.rotation.y=.4+.15*Math.sin(n*.07)}),(0,K.jsx)(`group`,{ref:t,position:[-2.6,mr,.9],rotation:[0,.4,0],children:(0,K.jsx)(Z,{url:e})})}var lh=[xt.x+2.6,0,xt.z+.3],uh=xt.x+1.08,dh=[uh+.03,.42,lh[2]+.125];function fh(){let e=(0,U.useMemo)(()=>{let e=new j(lh[0]-1.22,.008,lh[2]+.125),t=[e,new j(e.x-.2,.01,e.z+.02),new j(uh+.03,.012,e.z),new j(uh+.012,.08,e.z),new j(uh+.012,dh[1]-.06,e.z),new j(dh[0]+.02,dh[1]-.04,e.z)];return new Se(new ce(t,!1,`centripetal`),64,.0045,8,!1)},[]);return(0,K.jsxs)(X,{id:`pac`,children:[(0,K.jsx)(Z,{url:`/agr-piscine-confidentialite/demo-3d/models/panneau-solaire.glb`,position:lh}),(0,K.jsx)(`mesh`,{geometry:e,castShadow:!0,children:(0,K.jsx)(`meshStandardMaterial`,{color:`#141517`,roughness:.5})}),(0,K.jsxs)(`mesh`,{position:dh,castShadow:!0,children:[(0,K.jsx)(`boxGeometry`,{args:[.04,.09,.09]}),(0,K.jsx)(`meshStandardMaterial`,{color:`#8d949b`,roughness:.5})]}),(0,K.jsxs)(`mesh`,{position:[dh[0]+.03,dh[1]-.01,dh[2]],rotation:[0,0,Math.PI/2],castShadow:!0,children:[(0,K.jsx)(`cylinderGeometry`,{args:[.018,.018,.03,16]}),(0,K.jsx)(`meshStandardMaterial`,{color:`#1a1b1d`,roughness:.45})]})]})}function ph(){let e=z(e=>pn[e.materiel.robot??``]??`/agr-piscine-confidentialite/demo-3d/models/robot.glb`),t=z(e=>e.materiel.chauffage?Ct[e.materiel.chauffage]?.type===`solaire`:!1),n=z(e=>e.pool.regulationPh&&e.materiel.regulation?dn[e.materiel.regulation]?.flottant:void 0),r=z(e=>e.pool.robot),i=z(e=>e.pool.volet);return(0,K.jsxs)(K.Fragment,{children:[r&&(0,K.jsx)(U.Suspense,{fallback:null,children:(0,K.jsx)(X,{id:`robot`,children:H&&Xt(`robot`)?(0,K.jsx)(Mm,{url:e}):(0,K.jsx)(Z,{url:e,position:[-1,.025,2.78],rotation:[0,Math.PI/2,0]},e)})}),t&&(0,K.jsx)(U.Suspense,{fallback:null,children:(0,K.jsx)(fh,{})}),n&&(0,K.jsx)(U.Suspense,{fallback:null,children:(0,K.jsx)(X,{id:`regulation-ph`,children:(0,K.jsx)(ch,{url:n})})}),i&&(0,K.jsx)(U.Suspense,{fallback:null,children:(0,K.jsx)(X,{id:`volet`,children:(0,K.jsx)(rl,{})})})]})}function mh(){let e=Jr(`terre`);return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(ph,{}),H&&Xt(`vie`)&&(0,K.jsx)(Hp,{}),H&&(0,K.jsx)(sm,{}),H&&Xt(`palmiers`)&&(0,K.jsx)(Xp,{}),$r?(0,K.jsx)(Cm,{}):(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(Ji,{graine:3,position:[-11,0,-5.5],scale:.9,rotation:[0,.6,0]}),(0,K.jsx)(Ji,{graine:5,position:[3.4,0,-6.2],scale:.75,rotation:[0,2.4,0]}),(0,K.jsx)(Ji,{graine:7,position:[-13,0,3.5],scale:.7,rotation:[0,4.1,0]})]}),(0,K.jsx)(Z,{url:`/agr-piscine-confidentialite/demo-3d/models/decor/salon-jardin.glb`,position:[-3,.025,-3.1],rotation:[0,.2,0]}),(0,K.jsx)(Z,{url:`/agr-piscine-confidentialite/demo-3d/models/transat.glb`,position:[-5.1,.025,3.14],rotation:[0,-Math.PI/2,0]}),(0,K.jsx)(Z,{url:`/agr-piscine-confidentialite/demo-3d/models/transat.glb`,position:[-3.8,.025,3.14],rotation:[0,-Math.PI/2,0]}),hh.map(([t,n],r)=>(0,K.jsxs)(`group`,{position:[t,.025,n],rotation:[0,r*1.7,0],children:[(0,K.jsx)(Z,{url:`/agr-piscine-confidentialite/demo-3d/models/decor/pot-terre-cuite.glb`,scale:2.6}),(0,K.jsxs)(`mesh`,{position:[-.003,.53,.03],receiveShadow:!0,children:[(0,K.jsx)(`cylinderGeometry`,{args:[.3,.29,.03,40]}),(0,K.jsx)(`meshStandardMaterial`,{...e,...Yr(`terre`)})]}),(0,K.jsx)(Ji,{graine:11+r,position:[0,.5,0],scale:.15,ombres:!1})]},r)),(0,K.jsx)(Wi,{})]})}var hh=[[2.35,3.35],[-8.35,3.35],[2.35,-3.35]];function gh(){let[e,t,n,r]=Bm,i=z(e=>e.pool.liner===`coque`);return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(Xm,{}),i?(0,K.jsx)(Ts,{}):(0,K.jsx)(Zm,{}),(0,K.jsx)(Er,{x0:e,x1:t,z0:n,z1:r,depth:qm,banquette:null,plage:i?_s.x:null,jets:oh}),(0,K.jsx)(ah,{}),(0,K.jsx)(mh,{}),(0,K.jsx)(xc,{}),H&&(0,K.jsxs)(U.Suspense,{fallback:null,children:[Xt(`paysage`)&&(0,K.jsx)(sd,{}),Xt(`villa`)&&(0,K.jsx)(op,{}),Xt(`herbe`)&&(0,K.jsx)(fp,{}),Xt(`vie`)&&(0,K.jsx)(Mp,{})]})]})}var _h={aller:null},vh=()=>_h.aller?.(-6.2,-.75,1.15,.2,-1.25,-.5,!0),yh=()=>_h.aller?.(-2,7.5,11.5,-2.5,-.6,0,!0),bh={uSoleil:{value:new j(0,1,0)},uLune:{value:new j(0,-1,0)},uTeinte:{value:new P(1,1,1)},uNuit:{value:0},uTemps:{value:0},uCouvert:{value:.42}},xh=`
  uniform vec3 uSoleil;
  uniform vec3 uLune;
  uniform vec3 uTeinte;
  uniform float uNuit;
  uniform float uTemps;
  uniform float uCouvert;

  float cH(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float cN(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(cH(i), cH(i + vec2(1.0, 0.0)), f.x), mix(cH(i + vec2(0.0, 1.0)), cH(i + vec2(1.0, 1.0)), f.x), f.y);
  }
  float cFbm(vec2 p) {
    float a = 0.5, s = 0.0;
    for (int i = 0; i < 5; i++) { s += a * cN(p); p = p * 2.03 + vec2(17.3, 9.1); a *= 0.5; }
    return s;
  }

  // jour : 0 la nuit, 1 en plein jour ; crep : 1 au lever et au coucher
  float cJour() { return smoothstep(-0.10, 0.30, uSoleil.y); }
  float cCrep() { return smoothstep(-0.22, 0.02, uSoleil.y) * (1.0 - smoothstep(0.05, 0.42, uSoleil.y)); }

  vec3 cAtmosphere(vec3 d) {
    float jour = cJour(), crep = cCrep();
    float h = clamp(d.y, 0.0, 1.0);
    float vs = max(dot(normalize(d.xz + 1e-5), normalize(uSoleil.xz + 1e-5)), 0.0);
    // ciel d'été du Midi (photos de jardins de référence) : bleu franc au zénith, bleu clair à l'horizon, pas blanc
    vec3 zen = mix(vec3(0.006, 0.011, 0.030), vec3(0.045, 0.17, 0.66), jour);
    vec3 hor = mix(vec3(0.016, 0.026, 0.055), vec3(0.34, 0.56, 0.98), jour);
    zen = mix(zen, vec3(0.15, 0.16, 0.40), crep * 0.55);
    hor = mix(hor, mix(vec3(0.78, 0.50, 0.42), vec3(1.55, 0.60, 0.17), pow(vs, 1.5)), crep * 0.85);
    vec3 col = mix(hor, zen, pow(h, 0.5));
    // bande chaude au ras de l'horizon, du côté du soleil
    col += vec3(1.0, 0.33, 0.10) * crep * pow(vs, 3.0) * exp(-h * 9.0) * 0.6;
    // halo du soleil
    float c = max(dot(d, uSoleil), 0.0);
    float vis = smoothstep(-0.12, 0.02, uSoleil.y);
    col += uTeinte * vis * (pow(c, 6.0) * 0.10 + pow(c, 48.0) * 0.35 + pow(c, 600.0) * 1.6);
    return col;
  }

  vec3 cEtoiles(vec3 d) {
    vec3 q = d * 230.0;
    vec3 i = floor(q);
    vec3 f = fract(q) - 0.5;
    float h = fract(sin(dot(i, vec3(12.9898, 78.233, 37.719))) * 43758.5453);
    float s = step(0.9972, h) * smoothstep(0.38, 0.0, length(f));
    float scint = 0.65 + 0.35 * sin(uTemps * 2.5 + h * 500.0);
    return mix(vec3(1.0, 0.92, 0.8), vec3(0.8, 0.9, 1.0), fract(h * 71.0)) * s * scint * (0.6 + 2.4 * fract(h * 31.0));
  }

  // disque : 1 pour dessiner le disque du soleil (ciel affiché), 0 pour l'image d'éclairage (le soleil y est déjà
  // une vraie lumière) ; sol : 1 pour donner au dessous de l'horizon la couleur du sol (lumière renvoyée)
  vec3 cielRefonte(vec3 dir, float disque, float sol) {
    vec3 d = normalize(vec3(dir.x, max(dir.y, 0.0), dir.z));
    float jour = cJour(), crep = cCrep();
    vec3 col = cAtmosphere(d);
    // étoiles et lune
    col += cEtoiles(d) * uNuit * uNuit * smoothstep(0.03, 0.3, d.y) * 1.4;
    float m = max(dot(d, uLune), 0.0);
    float lune = smoothstep(-0.05, 0.1, uLune.y) * (1.0 - cJour());
    col += vec3(0.75, 0.85, 1.0) * lune * (smoothstep(0.99962, 0.99978, m) * 3.0 * disque + pow(m, 250.0) * 0.12 + pow(m, 24.0) * 0.02);
    // disque du soleil
    float c = max(dot(d, uSoleil), 0.0);
    col += uTeinte * smoothstep(-0.06, 0.02, uSoleil.y) * smoothstep(0.99988, 0.99996, c) * 45.0 * disque;

    // nuages : couche plane, vue en perspective, qui dérive lentement
    if (d.y > 0.012) {
      vec2 p = d.xz / (d.y + 0.14) * 1.5 + uTemps * vec2(0.0075, 0.0028);
      float n = cFbm(p);
      float seuil = mix(0.78, 0.34, uCouvert);
      float dens = smoothstep(seuil, seuil + 0.26, n);
      if (dens > 0.001) {
        // le côté tourné vers l'astre est éclairé, l'autre reste dans l'ombre du nuage
        vec2 vers = normalize((uNuit > 0.6 ? uLune.xz : uSoleil.xz) + 1e-5);
        float n2 = cFbm(p + vers * 0.16);
        float lum = clamp(0.55 + (n - n2) * 3.2, 0.12, 1.0);
        vec3 clair = mix(vec3(1.22), uTeinte * 1.5 + vec3(0.25, 0.08, 0.02), crep) * (0.08 + 0.92 * jour);
        vec3 sombre = mix(vec3(0.42, 0.47, 0.58), vec3(0.34, 0.24, 0.32), crep) * (0.05 + 0.95 * jour);
        clair += vec3(0.10, 0.13, 0.20) * lune;
        sombre += vec3(0.012, 0.016, 0.028) * (1.0 - jour);
        vec3 nu = mix(sombre, clair, lum);
        // frange lumineuse quand le nuage passe devant le soleil
        nu += uTeinte * pow(c, 30.0) * (1.0 - dens) * 1.2 * smoothstep(-0.05, 0.05, uSoleil.y);
        float a = dens * smoothstep(0.012, 0.2, d.y) * 0.92;
        col = mix(col, nu, a);
      }
    }
    // sous l'horizon : la lumière que le sol ensoleillé (dalles claires, pelouse) renvoie vers le haut, chaude ; sans
    // elle, les ombres ne reçoivent que le bleu du ciel et virent au bleu (vu dans le local technique)
    if (sol > 0.5 && dir.y < 0.0) {
      vec3 renvoi = vec3(0.60, 0.54, 0.42) * mix(vec3(1.0), uTeinte, crep) * (0.03 + 0.97 * jour) * smoothstep(-0.05, 0.25, uSoleil.y);
      col = mix(col, max(renvoi, col * vec3(0.55, 0.47, 0.34)), smoothstep(0.0, -0.12, dir.y));
    }
    return col;
  }
`,Sh=V.ombres,Ch=new P(.4,.49,.64),wh=Sl?new T(new j(il.x0,-.2,il.z0),new j(il.x1,12.5,il.z1)):new T(new j(Y.x0-2.2,-.2,Y.z0-2.2),new j(Y.x1+2.2,9.5,31)),Th=.4,Eh={vertexShader:`
    varying vec3 vDir;
    void main() {
      vDir = position;
      // le ciel suit la caméra (pas de déplacement) et reste au fond de l'image
      vec4 p = projectionMatrix * vec4(mat3(viewMatrix) * position, 1.0);
      gl_Position = p.xyww;
    }`,fragmentShader:`
    ${xh}
    varying vec3 vDir;
    void main() {
      gl_FragColor = vec4(cielRefonte(normalize(vDir), 1.0, 0.0), 1.0);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`},Dh={vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,fragmentShader:`
    ${xh}
    varying vec2 vUv;
    void main() {
      float lon = (vUv.x - 0.5) * 6.28318530718;
      float lat = (vUv.y - 0.5) * 3.14159265359;
      vec3 d = vec3(cos(lat) * cos(lon), sin(lat), cos(lat) * sin(lon));
      gl_FragColor = vec4(min(cielRefonte(d, 0.0, 1.0), vec3(6.0)), 1.0);
    }`},Oh=1.6;function kh({shadows:e,quality:t}){let n=R(e=>e.gl),r=R(e=>e.scene),i=(0,U.useRef)(null),a=(0,U.useRef)(null);da(e,t);let o=Rt(`ombres-2048`)?Math.min(2048,Sh.taille[t===`haute`?`haute`:`standard`]):Sh.taille[t===`haute`?`haute`:`standard`];(0,U.useLayoutEffect)(()=>{i.current&&ua(i.current,o)},[o]);let s=(0,U.useMemo)(()=>{let e=new je(new le(1,48,24),new M({uniforms:{...bh},...Eh,side:1,depthWrite:!1,fog:!1}));e.frustumCulled=!1,e.renderOrder=900,e.name=`ciel`;let t=new We(512,256,{type:ue,depthBuffer:!1,magFilter:ge,minFilter:ge});return t.texture.mapping=303,{dome:e,cuisson:t,quad:new Dn(new M({uniforms:{...bh},...Dh,depthTest:!1,depthWrite:!1})),pmrem:new ne(n),ambiant:null,brume:new me(16777215,47e-5),sale:!0,dernier:0}},[n]),c=()=>{let e=n.getRenderTarget();n.setRenderTarget(s.cuisson),s.quad.render(n),s.ambiant=s.pmrem.fromEquirectangular(s.cuisson.texture,s.ambiant),n.setRenderTarget(e),s.sale=!1,s.dernier=Ft()},l=()=>{let e=nr(Kn.valeur,G);bh.uSoleil.value.copy(e.soleil),bh.uLune.value.copy(e.lune),bh.uTeinte.value.copy(e.teinteSoleil),bh.uNuit.value=e.nuit,s.brume.color.copy(e.horizon).multiply(Ch),q.uSun.value.copy(e.lumiere),q.uAstre.value.copy(e.couleur).multiplyScalar(e.intensite/4.6);let t=i.current;t&&(t.position.copy(e.lumiere).multiplyScalar(70),t.color.copy(e.couleur),t.intensity=e.intensite,Object.assign(t.shadow.camera,ra(t.position,wh)),t.shadow.camera.updateProjectionMatrix()),a.current&&(a.current.intensity=.02+.05*e.nuit),ea(300),s.sale=!0};(0,U.useLayoutEffect)(()=>{Bn.add(s.dome),l(),c();let e={fond:r.background,env:r.environment,force:r.environmentIntensity,brume:r.fog};r.background=null,r.environment=s.ambiant.texture,r.environmentIntensity=V.lumiere.cielIntensite*Oh,r.fog=s.brume,q.uCiel.value=s.cuisson.texture;let t=Xn(l);return()=>{t(),Bn.delete(s.dome),r.background=e.fond,r.environment=e.env,r.environmentIntensity=e.force,r.fog=e.brume,q.uAstre.value.setRGB(1,.93,.8)}},[s,r]),(0,U.useEffect)(()=>()=>{s.dome.geometry.dispose(),s.dome.material.dispose(),s.cuisson.dispose(),s.quad.dispose(),s.ambiant?.dispose(),s.pmrem.dispose()},[s]);let u=R(e=>e.controls);return(0,U.useEffect)(()=>(_h.aller=(...e)=>u?.setLookAt?.(...e),()=>void(_h.aller=null)),[u]),I(({clock:e},t)=>{bh.uTemps.value=e.elapsedTime,Kn.defile&&Jn(Kn.valeur+Math.min(t,.1)*Th),s.sale&&Ft()-s.dernier>120&&c(),n.toneMappingExposure=G.exposition*V.couleurs.exposition/.9}),(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(`primitive`,{object:s.dome}),(0,K.jsx)(`directionalLight`,{ref:i,castShadow:!0,"shadow-intensity":+!!e,"shadow-mapSize":[o,o],"shadow-bias":Sh.biais,"shadow-normalBias":Sh.biaisNormal*1.7,"shadow-radius":Sh.douceur}),(0,K.jsx)(`hemisphereLight`,{ref:a,args:[`#cfe3f2`,`#9a8f74`,.02]})]})}var Ah=[[`Matin`,8],[`Midi`,13],[`Soir`,18.5],[`Coucher`,20.6],[`Nuit`,23]],jh=`inline-flex min-h-10 items-center rounded-full px-3 text-petit font-semibold`;function Mh(){let e=(0,U.useSyncExternalStore)(Xn,()=>Kn.valeur),t=(0,U.useSyncExternalStore)(Xn,()=>Kn.defile),[n,r]=(0,U.useState)(!1),i=z(e=>!!e.selected||e.tourStep!==null||e.screen!==null||e.mode2d||e.recherche||e.intro===`en-cours`);i&&n&&r(!1),(0,U.useEffect)(()=>{if(!n)return;let e=e=>e.key===`Escape`&&r(!1);return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[n]);let[a,o]=(0,U.useState)(null);if((0,U.useLayoutEffect)(()=>{let e=document.getElementById(`haut`);if(!e)return;let t=()=>o(Math.round(e.getBoundingClientRect().bottom));t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[i]),i)return null;let s=()=>{let e=new URL(window.location.href);e.searchParams.set(`refonte`,`0`),e.searchParams.delete(`heure`),window.location.href=e.toString()},c=e<6||e>=21;return(0,K.jsx)(`div`,{"data-panneau-refonte":!0,className:`pointer-events-auto fixed right-4 z-20 top-(--sous-entete) md:top-[calc(max(0.75rem,env(safe-area-inset-top))_+_4rem)]`,style:{"--sous-entete":a===null?`calc(max(0.75rem, env(safe-area-inset-top)) + 7.6rem)`:`${a+8}px`},onPointerDown:e=>e.stopPropagation(),children:n?(0,K.jsxs)(`div`,{role:`group`,"aria-label":`Heure de la journée`,className:`w-[17rem] max-w-[calc(100vw_-_2rem)] rounded-moyen bg-surface/95 p-3 text-encre shadow-2`,children:[(0,K.jsxs)(`div`,{className:`flex items-center justify-between gap-2`,children:[(0,K.jsx)(`span`,{className:`text-legende font-semibold tracking-wide text-encre-2 uppercase`,children:`Heure`}),(0,K.jsx)(`span`,{className:`text-petit font-semibold tabular-nums`,children:ir(e)}),(0,K.jsx)(`button`,{onClick:()=>r(!1),"aria-label":`Fermer les réglages de l’heure`,className:`grid size-10 shrink-0 place-items-center rounded-full bg-surface-2 text-encre`,children:(0,K.jsx)(gn,{nom:`fermer`,taille:16})})]}),(0,K.jsx)(`input`,{type:`range`,min:0,max:24,step:.05,value:e,onChange:e=>{Yn(!1),Jn(Number(e.target.value))},className:`accent-lagon`,style:{width:`100%`,marginTop:8,height:28},"aria-label":`Heure de la journée`}),(0,K.jsx)(`div`,{className:`mt-2 flex flex-wrap gap-1.5`,children:Ah.map(([e,t])=>(0,K.jsx)(`button`,{onClick:()=>{Yn(!1),Jn(t)},className:`${jh} bg-surface-2 hover:bg-lagon/20`,children:e},e))}),(0,K.jsxs)(`div`,{className:`mt-2 flex flex-wrap gap-1.5`,children:[(0,K.jsx)(`button`,{onClick:vh,className:`${jh} bg-lagon/20 hover:bg-lagon/40`,children:`Plonger`}),(0,K.jsx)(`button`,{onClick:yh,className:`${jh} bg-surface-2 hover:bg-lagon/20`,children:`Remonter`}),(0,K.jsx)(`button`,{onClick:()=>Yn(!t),className:`${jh} bg-surface-2 hover:bg-lagon/20`,children:t?`Arrêter le temps`:`Faire défiler le temps`})]}),(0,K.jsx)(`button`,{onClick:s,className:`mt-2 inline-flex min-h-10 items-center text-petit font-semibold text-encre-2 underline`,children:`Ancien rendu`})]}):(0,K.jsxs)(`button`,{onClick:()=>r(!0),"aria-expanded":!1,"aria-label":`Heure de la journée : ${ir(e)}. Ouvrir les réglages`,className:`inline-flex min-h-11 items-center gap-1.5 rounded-full border border-trait bg-surface/90 px-3 text-petit font-semibold text-encre shadow-1`,children:[(0,K.jsx)(gn,{nom:c?`lune`:`soleil`,taille:16}),(0,K.jsx)(`span`,{className:`tabular-nums`,children:ir(e)})]})})}var Nh=typeof window<`u`&&new URLSearchParams(window.location.search).has(`cam`),Ph=new Set([`skimmer`,`bonde`,`prise-balai`,`refoulement`,`projecteur`,`pac`,`robot`,`volet`,`spa`]);function Fh(e,t){return st.filter(t=>t.id!==`bassin`&&t.id!==`canalisations`&&vt(e,t.id)&&(t.id!==`spa`||H)).filter(e=>t===`piscine`?Ph.has(e.id):!Ph.has(e.id)||e.id===`pac`)}var Ih=new Map,Lh=0;function Rh({id:e,numero:t,nom:n,ouverte:r}){let i=(0,U.useRef)(null),a=(0,U.useRef)(null);(0,U.useLayoutEffect)(()=>{if(i.current&&a.current)return Ih.set(e,{racine:i.current,etiquette:a.current}),Lh++,()=>{Ih.delete(e),Lh++}},[e,n,r]);let o=String(t).padStart(2,`0`),s=()=>Tt(e);return(0,K.jsxs)(`div`,{ref:i,className:`absolute top-0 left-0`,style:{visibility:`hidden`,willChange:`transform`},children:[(0,K.jsx)(`span`,{onClick:s,"aria-hidden":!0,className:`pointer-events-auto absolute -top-3.5 -left-3.5 grid size-7 cursor-pointer place-items-center`,children:(0,K.jsx)(`span`,{className:`size-2.5 rounded-full ring-2 ring-surface ${r?`bg-lagon`:`bg-encre`}`})}),(0,K.jsxs)(`button`,{ref:a,onClick:s,onPointerEnter:()=>bt({hovered:e}),onPointerLeave:()=>bt(t=>t.hovered===e?{hovered:null}:{}),"aria-label":`${o}, ${n}`,className:`group pointer-events-auto absolute top-0 left-0 flex items-center gap-1.5 rounded-[7px] px-2 py-1 whitespace-nowrap text-encre transition-transform duration-200 before:absolute before:-inset-2.5 before:content-[''] ${r?`bg-surface shadow-2`:`bg-surface/92 shadow-1`}`,children:[(0,K.jsx)(`span`,{className:`font-chiffres text-[11px] text-encre-3`,children:o}),(0,K.jsx)(`span`,{className:`text-[12.5px] leading-tight font-semibold group-data-[compact=1]:hidden`,children:n})]})]})}function zh(){let e=z(e=>e.pool),t=z(e=>e.view),n=z(e=>e.selected),r=z(e=>e.tourStep!==null||e.intro===`en-cours`||e.screen===`vanne`||e.screen===`bypass`||!e.scenePrete),i=(0,U.useMemo)(()=>Fh(e,t),[e,t]);return t===`circuit`||r||Nh?null:(0,K.jsx)(`div`,{className:`pointer-events-none absolute inset-0 z-15 overflow-hidden`,children:i.map((e,t)=>(0,K.jsx)(Rh,{id:e.id,numero:t+1,nom:e.name,ouverte:n===e.id},e.id))})}var Bh=11,Vh=[(e,t,n,r)=>[e+Bh,t-r/2],(e,t,n,r)=>[e-Bh-n,t-r/2],(e,t,n,r)=>[e-n/2,t-Bh-r],(e,t,n)=>[e-n/2,t+Bh],(e,t,n,r)=>[e+Bh-3,t-r-5],(e,t)=>[e+Bh-3,t+5],(e,t,n,r)=>[e-Bh+3-n,t-r-5],(e,t,n)=>[e-Bh+3-n,t+5]],Hh=new j;function Uh(e,t){if(H&&e===`robot`)return t.copy(jm.position).setY(jm.position.y+.38);let n=ot[e],r=n.pastille??[n.focus[0],n.focus[1]+.22,n.focus[2]];return t.set(r[0],r[1],r[2])}function Wh(e,t,n,r){let i=St(),a=Math.max(0,(document.getElementById(`haut`)?.getBoundingClientRect().bottom??0)-(document.querySelector(`canvas`)?.getBoundingClientRect().top??0)),o=[];for(let[r,s]of Ih)Uh(r,Hh).project(e),Hh.z>1||Math.abs(Hh.x)>1||Math.abs(Hh.y)>1||(-Hh.y*.5+.5)*n<a+4?s.racine.style.visibility=`hidden`:o.push({id:r,n:s,x:(Hh.x*.5+.5)*t,y:(-Hh.y*.5+.5)*n,rang:r===i.selected?0:r===i.hovered?1:2});o.sort((e,t)=>e.rang-t.rang);let s=[],c=(e,r,i)=>e.x0>=6&&e.y0>=a+4&&e.x1<=t-6&&e.y1<=n-6&&!s.some(t=>e.x0<t.x1+i&&e.x1>t.x0-i&&e.y0<t.y1+i&&e.y1>t.y0-i)&&!o.some(t=>t.id!==r&&t.x>e.x0-8&&t.x<e.x1+8&&t.y>e.y0-8&&t.y<e.y1+8);for(let e of o){let t=e.n.etiquette,n=r.get(e.id);if(!n||n.version!==Lh){t.dataset.compact=``;let i=t.offsetWidth,a=t.offsetHeight;t.dataset.compact=`1`;let o=t.offsetWidth;n={version:Lh,l:i,lCompact:o,h:a,place:n?.place??0,compact:n?.compact??!1,ecrit:``},t.dataset.compact=n.compact?`1`:``,r.set(e.id,n)}let a=n,o=!i.labels,l=!o&&e.rang<2,u=(t,n)=>{let r=n?a.lCompact:a.l,[i,o]=Vh[t](e.x,e.y,r,a.h);return{x0:i,y0:o,x1:i+r,y1:o+a.h}},d=[a.place,...Vh.map((e,t)=>t).filter(e=>e!==a.place)],f=null;for(let t of o?[!0]:l?[!1]:[!1,!0]){let n=!t&&a.compact?10:3;for(let r of d){let i=u(r,t);if(c(i,e.id,n)){f={place:r,compact:t,b:i};break}}if(f)break}f??={place:0,compact:!l,b:u(0,!l)},s.push(f.b);let p=e.n.racine.style;p.transform=`translate3d(${e.x.toFixed(1)}px,${e.y.toFixed(1)}px,0)`,p.visibility=`visible`,p.zIndex=e.rang===0?`3`:e.rang===1?`2`:`1`;let m=`translate3d(${(f.b.x0-e.x).toFixed(1)}px,${(f.b.y0-e.y).toFixed(1)}px,0)`;(a.ecrit!==m||a.compact!==f.compact)&&(t.style.transform=m,t.dataset.compact=f.compact?`1`:``,a.ecrit=m,a.compact=f.compact),a.place=f.place}}function Gh(){let e=R(e=>e.size),t=(0,U.useRef)(new Map);return I(({camera:n})=>{Ih.size&&Wh(n,e.width,e.height,t.current)}),null}var Kh={duree:300,glisse:10},qh={delai:350,ecart:40},Jh=120,Yh=e=>{for(let t=e;t;t=t.parent)if(t.name in ot)return!0;return!1};function Xh(){let e=R(e=>e.gl),t=R(e=>e.camera),n=R(e=>e.scene);return(0,U.useEffect)(()=>{let r=e.domElement,i={t:0,x:0,y:0},a={t:-1e9,x:0,y:0},o=new Ze,s=new F,c=e=>{e.isPrimary&&(i={t:e.timeStamp,x:e.clientX,y:e.clientY})},l=e=>{if(!e.isPrimary||e.timeStamp-i.t>Kh.duree||Math.hypot(e.clientX-i.x,e.clientY-i.y)>Kh.glisse)return;let c=e.timeStamp-a.t<qh.delai&&Math.hypot(e.clientX-a.x,e.clientY-a.y)<qh.ecart;if(a=c?{t:-1e9,x:0,y:0}:{t:e.timeStamp,x:e.clientX,y:e.clientY},!c)return;let l=r.getBoundingClientRect();s.set((e.clientX-l.left)/l.width*2-1,-((e.clientY-l.top)/l.height)*2+1),o.setFromCamera(s,t);let u=o.intersectObjects(n.children,!0).find(e=>e.distance<Jh&&e.object.visible);u&&!Yh(u.object)&&(xn(`cran`),$t.viser?.(u.point.x,u.point.y,u.point.z))};return r.addEventListener(`pointerdown`,c),r.addEventListener(`pointerup`,l),()=>{r.removeEventListener(`pointerdown`,c),r.removeEventListener(`pointerup`,l)}},[e,t,n]),null}function Zh(){let e=(0,U.useSyncExternalStore)(Qt.abonner,Qt.lire),t=z(e=>e.selected!==null||e.tourStep!==null||e.screen!==null||e.mode2d||e.recherche||e.intro===`en-cours`),n=hn();return(0,K.jsx)(ct,{children:e&&!t&&(0,K.jsxs)(ut.button,{initial:{opacity:0,scale:n?1:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:n?1:.9},transition:{duration:.18},whileTap:{scale:.94},onClick:()=>{xn(`cran`),$t.recentrer?.()},className:`fixed right-4 z-20 inline-flex min-h-11 items-center gap-2 rounded-full border border-encre/15 bg-surface/92 px-4 text-petit font-semibold text-encre shadow-2 backdrop-blur-sm bottom-[calc(env(safe-area-inset-bottom)_+_8.6rem)] md:bottom-24`,children:[(0,K.jsx)(gn,{nom:`recentrer`,taille:18}),`Recentrer`]},`recentrer`)})}var Qh={piscine:H?{label:`Vue piscine`,cam:[-3,3.6,10.5],target:[-3,-.1,-1.5]}:{label:`Vue piscine`,cam:[-2,7.5,11.5],target:[-2.5,-.6,0]},local:{label:`Local technique`,cam:[5.2,2.4,2.2],target:[5.2,.55,-1]},circuit:{label:`Circuit complet`,cam:[1.5,14,13],target:[1.5,-.6,0]}},$h={vanne:{cible:[5.32,.45,-.9],depuis:[0,.5,.866],recul:[5.4,3]},bypass:{cible:[5.19,.82,-1.38],depuis:[.1,.42,.902],recul:[3.4,2.1]}},eg=e=>new j(...e),tg=e=>e<.5?16*e**5:1-(-2*e+2)**5/2;function ng(){let e=(0,U.useRef)(null),t=z(e=>e.view),n=z(e=>e.selected),i=z(e=>e.tourStep),a=z(e=>e.screen===`vanne`||e.screen===`bypass`?e.screen:null),o=a!==null,s=z(e=>e.intro),c=z(e=>e.screen===null),l=R(e=>e.size.width/e.size.height),u=(0,U.useRef)(null),d=hn(),f=z(e=>e.scenePrete),p=()=>{let e=i===null?n:lt(St().pool)[i]?.equipment,r=e&&(e!==`spa`||H)?ot[e]:null,o=l<1?Math.min(r?1.7:2.2,(r?.8:.95)/l):1,s=(e,t)=>e.map((e,n)=>t[n]+(e-t[n])*o);if(r&&l<1&&r.portrait)return{cam:r.portrait.cam,target:r.portrait.focus??r.focus};if(r)return{cam:s(r.cam,r.focus),target:r.focus};if(a){let e=$h[a],t=e.recul[l<1?0:1];return{cam:[e.cible[0]+e.depuis[0]*t,e.cible[1]+e.depuis[1]*t,e.cible[2]+e.depuis[2]*t],target:e.cible}}if(t===`piscine`&&l<1)return{cam:[-18.5,7.2,1.6],target:[-2.4,-.8,-.1]};if(t===`circuit`&&l<1)return{cam:[10,19/l**.5,.5],target:[1.5,-.6,0]};let c=Qh[t];return{cam:s(c.cam,c.target),target:c.target}},m=(t,n,r,i,a)=>{let o=e.current;if(!o)return;let s=new j,c=new j;o.getPosition(s),o.getTarget(c);let l=i??{cam:s.toArray(),target:c.toArray()};d||Vt||n<=0?(o.setLookAt(...t.cam,...t.target,!1),a?.()):(u.current={from:l,to:t,t:0,duree:n,arc:r,fin:a},ft(n))};(0,U.useEffect)(()=>{let t=e.current;if(!t)return;let n=()=>{if(!u.current)return;dt();let e=u.current.fin;u.current=null,e?.()};return t.addEventListener(`controlstart`,n),()=>t.removeEventListener(`controlstart`,n)},[]);let h=(0,U.useRef)(0);I(({camera:e})=>{let t=performance.now();if(t-h.current<250)return;h.current=t;let{x:n,y:r,z:i}=e.position,a=Math.max(Bm[0]-n,0,n-Bm[1]),o=Math.max(Bm[2]-i,0,i-Bm[3]);x(Math.hypot(a,Math.max(0,r),o))}),I((t,n)=>{let r=u.current,i=e.current;if(!r&&i&&_n.vitesse&&i.rotate(_n.vitesse*Math.min(n,1/20),0,!1),!r||!i)return;r.t=Math.min(1,r.t+Math.min(n,_n.pasMax)/r.duree);let a=tg(r.t),o=eg(r.from.cam),s=eg(r.to.cam),c=o.clone().add(s).multiplyScalar(.5);c.y+=r.arc*o.distanceTo(s);let l=o.clone().multiplyScalar((1-a)**2).add(c.multiplyScalar(2*(1-a)*a)).add(s.clone().multiplyScalar(a*a)),d=eg(r.from.target).lerp(eg(r.to.target),a);i.setLookAt(l.x,l.y,l.z,d.x,d.y,d.z,!1),r.t>=1&&(u.current=null,r.fin?.())}),(0,U.useEffect)(()=>{if(s!==`attente`||!c||!f||!e.current)return;if(new URLSearchParams(window.location.search).has(`cam`))return bt({intro:`fini`});let t=p(),n={cam:[t.cam[0]*1.6+8,t.cam[1]+22,t.cam[2]*1.6+18],target:[-3,-.5,0]};e.current.setLookAt(...n.cam,...n.target,!1),bt({intro:`en-cours`}),m(t,3.6,0,n,()=>{bt({intro:`fini`});try{localStorage.setItem(Ot,`1`)}catch{}})},[s,c,f]),(0,U.useEffect)(()=>{let t=e.current;if(!t)return;let n=()=>St().intro!==`en-cours`&&Qt.regler(!0);return t.addEventListener(`controlend`,n),()=>t.removeEventListener(`controlend`,n)},[]);let g=()=>{let t=e.current;if(!t||s===`en-cours`||s===`attente`&&c)return;Qt.regler(!1);let r=new URLSearchParams(window.location.search).get(`cam`)?.split(`,`).map(Number);if(r?.length===6&&r.every(Number.isFinite)){t.setLookAt(...r,!1);return}let l=p(),u=new j;t.getPosition(u);let d=u.distanceTo(eg(l.cam));m(l,d<.5?.45:Math.min(1.5,.8+d*.035),d>3?.35:.08);let f=i===null?n:lt(St().pool)[i]?.equipment,h=!!n||i!==null||o,g=window.innerWidth<768,_=f||a?eg(l.cam).distanceTo(eg(l.target)):6;h&&g?t.setFocalOffset(0,_*(i===null?a?.2:.27:.17),0,!Vt):h?t.setFocalOffset(_*.22,0,0,!Vt):t.setFocalOffset(0,0,0,!Vt)};return(0,U.useEffect)(g,[t,n,i,a,l,s,c]),(0,U.useEffect)(()=>($t.recentrer=g,$t.viser=(t,n,r)=>{let i=e.current;if(!i)return;let a=new j,o=new j;i.getPosition(a),i.getTarget(o);let s=new j(t,n,r),c=Math.max(2.5,Math.min(a.distanceTo(o),a.distanceTo(s))*.5),l=s.clone().add(a.clone().sub(o).normalize().multiplyScalar(c));i.setFocalOffset(0,0,0,!0),m({cam:l.toArray(),target:[t,n,r]},.7,.05),Qt.regler(!0)},$t.montrer=t=>{let n=e.current,r=ot[t];n&&r&&(n.setFocalOffset(0,0,0,!0),m(l<1&&r.portrait?{cam:r.portrait.cam,target:r.portrait.focus??r.focus}:{cam:r.cam,target:r.focus},1.4,.08))},()=>{$t.recentrer=null,$t.viser=null,$t.montrer=null})),(0,K.jsx)(r,{ref:e,makeDefault:!0,minDistance:1,maxDistance:70,maxPolarAngle:Math.PI*.47,smoothTime:.35,draggingSmoothTime:.12})}function rg(){let{active:e,progress:n}=t(),r=z(e=>e.scenePreparee),[i,a]=(0,U.useState)(!1),[o,s]=(0,U.useState)(!1),c=hn();return(0,U.useEffect)(()=>{if(!e&&n===100&&r){let e=setTimeout(()=>a(!0),250),t=setTimeout(()=>bt({scenePrete:!0}),800);return()=>{clearTimeout(e),clearTimeout(t)}}},[e,n,r]),o?null:(0,K.jsx)(ut.div,{className:`absolute inset-0 z-40`,initial:!1,animate:i?c?{opacity:0}:{clipPath:`circle(0% at 50% 46%)`}:{clipPath:`circle(150% at 50% 46%)`},transition:{duration:c?.2:.9,ease:[.83,0,.17,1]},onAnimationComplete:()=>i&&s(!0),children:(0,K.jsx)(ut.div,{className:`h-full`,animate:i?{opacity:0,scale:1.04,filter:`blur(6px)`}:{opacity:1},transition:{duration:.5},children:(0,K.jsx)(S,{progress:r?100:n*.92})})})}function ig({onActif:e}){let n=R(e=>e.invalidate),[r,i]=(0,U.useState)(!1),a=z(e=>e.scenePreparee),o=Nt(`lancement`)?a:r;return(0,U.useEffect)(()=>{if(r)return;let e=0,n=()=>{let{active:e,progress:n}=t.getState();!e&&n===100&&i(!0)},a=t.subscribe(()=>{clearTimeout(e),e=window.setTimeout(n,0)});return n(),()=>{clearTimeout(e),a()}},[r]),(0,U.useEffect)(()=>{if(!o){let e=setInterval(n,250);return()=>clearInterval(e)}let{imagesRepos:t,reposApres:r}=V.nettete.cadence,i=It?V.nettete.cadence.imagesActifTactile:V.nettete.cadence.imagesActif,a=performance.now()+r*1e3,s=!0,c=0,l=0,u=()=>{a=performance.now()+r*1e3},d=r=>{l=requestAnimationFrame(d);let o=r<a;o!==s&&e(s=o);let u=1e3/(o?i:t);r-c<u-3||(c=Math.max(c+u,r-u),n())};l=requestAnimationFrame(d);let f=[`pointerdown`,`pointermove`,`wheel`,`keydown`,`touchstart`,`touchmove`];f.forEach(e=>window.addEventListener(e,u,{passive:!0}));let p=Dt(u);return()=>{cancelAnimationFrame(l),f.forEach(e=>window.removeEventListener(e,u)),p(),e(!0)}},[o,n,e]),null}function ag({children:e}){return Lr(),e}var og=()=>{let e=t.getState();return!e.active&&e.progress===100&&e.total>0},sg=(e,t)=>new Promise(n=>{let r=!Nt(`lancement`),i=0,a=-1,o=performance.now(),s=!1,c=r?requestAnimationFrame(function e(t){t-o>120&&(s=!0),o=t,c=requestAnimationFrame(e)}):0,l=performance.now()+100,u=setInterval(()=>{let d=performance.now(),f=r?s||d-o>=120:d-l>120;l=d+100;let p=0;e.traverse(()=>void p++),i=og()&&p===a&&!f?i+100:0,a=p,s=!1,(i>=1e3||t())&&(clearInterval(u),cancelAnimationFrame(c),n())},100)}),cg=()=>new Promise(e=>requestAnimationFrame(()=>requestAnimationFrame(()=>e())));function lg(){let e=R(e=>e.gl),n=R(e=>e.scene),r=R(e=>e.camera),i=R(e=>e.invalidate),a=(0,U.useRef)([]);return(0,U.useEffect)(()=>()=>a.current.forEach(e=>e.dispose()),[]),(0,U.useEffect)(()=>{if(St().scenePreparee)return;let o=!1,s=()=>{o||(o=!0,bt({scenePreparee:!0}))},c=setTimeout(s,25e3),l=async()=>{performance.now(),i(),await cg(),ls(St().pool.pac,St().pool.cartouche);let t=new tt;n.traverse(e=>{if(!(e instanceof je)||e.isInstancedMesh)return;let n=e.material;if(n instanceof rt&&!n.transparent)for(let r of[!1,!0]){let i=n.clone();i.transparent=r,i.depthWrite=!r,i.onBeforeCompile=n.onBeforeCompile,i.customProgramCacheKey=n.customProgramCacheKey;let o=new je(e.geometry,i);o.receiveShadow=e.receiveShadow,o.castShadow=e.castShadow,t.add(o),a.current.push(i)}});try{e.extensions.has(`KHR_parallel_shader_compile`)?(await e.compileAsync(n,r),await e.compileAsync(t,r,n)):(e.compile(n,r),e.compile(t,r,n))}catch{}performance.now();let o=new Set;n.traverse(e=>{let t=e.material;if(t)for(let e of Array.isArray(t)?t:[t])for(let t of Object.values(e))t instanceof oe&&o.add(t)});for(let t of o)if(!(!t.image||t.isCompressedTexture&&!t.mipmaps?.length))try{e.initTexture(t)}catch{}i(),await cg(),i(),await cg()};return(async()=>{for(let e=0;e<4&&!o;e++){await sg(n,()=>o);let e=t.getState().loaded,r=0;n.traverse(()=>void r++),await l();let i=0;if(n.traverse(()=>void i++),og()&&t.getState().loaded===e&&i===r)break}s()})(),()=>{o=!0,clearTimeout(c)}},[e,n,r,i]),null}function ug({relancer:e}){let t=R(e=>e.gl);return(0,U.useEffect)(()=>{let n=t.domElement,r,i=()=>{clearTimeout(r),!document.hidden&&t.getContext().isContextLost()&&(r=setTimeout(e,2e3))},a=e=>{if(e.preventDefault(),bn())return window.location.reload();i()},o=()=>clearTimeout(r);return n.addEventListener(`webglcontextlost`,a),n.addEventListener(`webglcontextrestored`,o),document.addEventListener(`visibilitychange`,i),()=>{clearTimeout(r),n.removeEventListener(`webglcontextlost`,a),n.removeEventListener(`webglcontextrestored`,o),document.removeEventListener(`visibilitychange`,i)}},[t,e]),null}bt({qualite3d:Ut});function dg(){let[e,t]=(0,U.useState)(Ut),[r,i]=(0,U.useState)(()=>tn(Ut)),[a,o]=(0,U.useState)(()=>Pt&&!Lt?on():rn),s=sn[Math.min(a,sn.length-1)],c=s.niveau??e,l=s.niveau?tn(s.niveau):r,u=c!==`basse`,d=c===`haute`?`haute`:`basse`;(0,U.useEffect)(()=>bt({qualite3d:c}),[c]);let f=z(e=>e.scenePrete);(0,U.useEffect)(()=>yn(),[]),(0,U.useEffect)(()=>{f&&vn()},[f]);let[p,m]=(0,U.useState)(0),h=z(e=>e.sceneCachee),[g,_]=(0,U.useState)(!1),y=(0,U.useCallback)(()=>_(!0),[]);(0,U.useEffect)(()=>{if(!g)return;let e=setTimeout(()=>{m(e=>e+1),_(!1)},100);return()=>clearTimeout(e)},[g]);let b=(0,U.useRef)(null),[x,S]=(0,U.useState)(!0);return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(`div`,{ref:b,className:`absolute inset-0`,children:[!g&&(0,K.jsxs)(v,{frameloop:h||Vt?`never`:`demand`,onCreated:({gl:e})=>{e.debug.checkShaderErrors=!1},dpr:l*s.resolution,shadows:`percentage`,camera:{position:Qh.piscine.cam,fov:45,near:.1,far:2500},gl:{antialias:V.nettete.lissageEcran[Ut],alpha:!1,powerPreference:`high-performance`,toneMapping:6},onPointerMissed:()=>Tt(null),"aria-label":`Piscine et local technique en 3D. Touchez un équipement pour ouvrir sa fiche.`,children:[!Lt&&(0,K.jsx)(n,{pixelated:!1}),Lt&&(0,K.jsx)(fa,{}),(0,K.jsx)(ug,{relancer:y}),(0,K.jsx)(ig,{onActif:S}),!1,(0,K.jsx)(U.Suspense,{fallback:null,children:(0,K.jsxs)(ag,{children:[H?(0,K.jsx)(kh,{shadows:u,quality:d}):(0,K.jsx)(la,{shadows:u,quality:d,fondNet:!Wt&&c!==`basse`}),(0,K.jsx)(gh,{}),(0,K.jsx)(ss,{}),(0,K.jsx)(fs,{}),(0,K.jsx)(hs,{}),(0,K.jsx)(Gh,{}),(0,K.jsx)(Xh,{}),!Pt&&!Lt&&(0,K.jsx)(an,{niveau:c,dpr:l,actif:x&&!h,onChange:(e,n)=>(t(e),i(n))}),Pt&&nn&&!Lt&&(0,K.jsx)(en,{cran:a,actif:x&&!h,onChange:o}),(0,K.jsx)(lg,{})]})}),(0,K.jsx)(ng,{}),!Wt&&c!==`basse`?(0,K.jsx)(Oo,{quality:d,allege:s}):(0,K.jsx)(ko,{})]},p),(0,K.jsx)(zh,{})]}),(0,K.jsx)(Zh,{}),H&&(0,K.jsx)(Mh,{}),(0,K.jsx)(rg,{})]})}export{Qh as VIEWS,dg as default};