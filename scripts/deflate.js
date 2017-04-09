var deflate=function(){function Oa(){this.fc=0,this.dl=0}function Pa(){this.dyn_tree=null,this.static_tree=null,this.extra_bits=null,this.extra_base=0,this.elems=0,this.max_length=0,this.max_code=0}function Qa(a,b,c,d){this.good_length=a,this.max_lazy=b,this.nice_length=c,this.max_chain=d}function Ra(){this.next=null,this.len=0,this.ptr=new Array(i),this.off=0}function Xa(a){var b;if(a?a<1?a=1:a>9&&(a=9):a=e,ka=a,O=!1,ga=!1,null==P){for(L=M=N=null,P=new Array(i),T=new Array(j),U=new Array(p),V=new Array(g+h),W=new Array(1<<m),na=new Array(J),b=0;b<J;b++)na[b]=new Oa;for(oa=new Array(2*E+1),b=0;b<2*E+1;b++)oa[b]=new Oa;for(pa=new Array(D+2),b=0;b<D+2;b++)pa[b]=new Oa;for(qa=new Array(E),b=0;b<E;b++)qa[b]=new Oa;for(ra=new Array(2*F+1),b=0;b<2*F+1;b++)ra[b]=new Oa;sa=new Pa,ta=new Pa,ua=new Pa,va=new Array(y+1),wa=new Array(2*D+1),za=new Array(2*D+1),Aa=new Array(l-k+1),Ba=new Array(512),Ca=new Array(A),Da=new Array(E),Ea=new Array(parseInt(n/8))}}function Za(a){a.next=L,L=a}function $a(){var a;return null!=L?(a=L,L=L.next):a=new Ra,a.next=null,a.len=a.off=0,a}function _a(b){return W[a+b]}function ab(b,c){return W[a+b]=c}function bb(a){P[R+Q++]=a,R+Q==i&&Hb()}function cb(a){a&=65535,R+Q<i-2?(P[R+Q++]=255&a,P[R+Q++]=a>>>8):(bb(255&a),bb(a>>>8))}function db(){$=($<<K^255&T[ea+k-1])&r,_=_a($),W[ea&s]=_,ab($,ea)}function eb(a,b){Eb(b[a].fc,b[a].dl)}function fb(a){return 255&(a<256?Ba[a]:Ba[256+(a>>7)])}function gb(a,b,c){return a[b].fc<a[c].fc||a[b].fc==a[c].fc&&za[b]<=za[c]}function hb(a,b,c){var d;for(d=0;d<c&&Na<Ma.length;d++)a[b+d]=255&Ma.charCodeAt(Na++);return d}function ib(){var b;for(b=0;b<q;b++)W[a+b]=0;if(ja=Wa[ka].max_lazy,la=Wa[ka].good_length,f||(ma=Wa[ka].nice_length),ia=Wa[ka].max_chain,ea=0,Z=0,ha=hb(T,0,2*a),ha<=0)return ga=!0,void(ha=0);for(ga=!1;ha<v&&!ga;)kb();for($=0,b=0;b<k-1;b++)$=($<<K^255&T[b])&r}function jb(a){var d,e,b=ia,c=ea,g=da,h=ea>w?ea-w:t,i=ea+l,j=T[c+g-1],k=T[c+g];da>=la&&(b>>=2);do if(d=a,T[d+g]==k&&T[d+g-1]==j&&T[d]==T[c]&&T[++d]==T[c+1]){c+=2,d++;do;while(T[++c]==T[++d]&&T[++c]==T[++d]&&T[++c]==T[++d]&&T[++c]==T[++d]&&T[++c]==T[++d]&&T[++c]==T[++d]&&T[++c]==T[++d]&&T[++c]==T[++d]&&c<i);if(e=l-(i-c),c=i-l,e>g){if(fa=a,g=e,f){if(e>=l)break}else if(e>=ma)break;j=T[c+g-1],k=T[c+g]}}while((a=W[a&s])>h&&0!=--b);return g}function kb(){var b,c,d=j-ha-ea;if(d==-1)d--;else if(ea>=a+w){for(b=0;b<a;b++)T[b]=T[b+a];for(fa-=a,ea-=a,Z-=a,b=0;b<q;b++)c=_a(b),ab(b,c>=a?c-a:t);for(b=0;b<a;b++)c=W[b],W[b]=c>=a?c-a:t;d+=a}ga||(b=hb(T,ea+ha,d),b<=0?ga=!0:ha+=b)}function lb(){for(;0!=ha&&null==M;){var a;if(db(),_!=t&&ea-_<=w&&(ca=jb(_),ca>ha&&(ca=ha)),ca>=k)if(a=Bb(ea-fa,ca-k),ha-=ca,ca<=ja){ca--;do ea++,db();while(0!=--ca);ea++}else ea+=ca,ca=0,$=255&T[ea],$=($<<K^255&T[ea+1])&r;else a=Bb(0,255&T[ea]),ha--,ea++;for(a&&(Ab(0),Z=ea);ha<v&&!ga;)kb()}}function mb(){for(;0!=ha&&null==M;){if(db(),da=ca,aa=fa,ca=k-1,_!=t&&da<ja&&ea-_<=w&&(ca=jb(_),ca>ha&&(ca=ha),ca==k&&ea-fa>u&&ca--),da>=k&&ca<=da){var a;a=Bb(ea-1-aa,da-k),ha-=da-1,da-=2;do ea++,db();while(0!=--da);ba=0,ca=k-1,ea++,a&&(Ab(0),Z=ea)}else 0!=ba?(Bb(0,255&T[ea-1])&&(Ab(0),Z=ea),ea++,ha--):(ba=1,ea++,ha--);for(;ha<v&&!ga;)kb()}}function nb(){ga||(X=0,Y=0,qb(),ib(),M=null,Q=0,R=0,ka<=3?(da=k-1,ca=0):(ca=k-1,ba=0),S=!1)}function ob(a,b,c){var d;return O||(nb(),O=!0,0!=ha)?(d=pb(a,b,c))==c?c:S?d:(ka<=3?lb():mb(),0==ha&&(0!=ba&&Bb(0,255&T[ea-1]),Ab(1),S=!0),d+pb(a,d+b,c-d)):(S=!0,0)}function pb(a,b,c){var d,e,f;for(d=0;null!=M&&d<c;){for(e=c-d,e>M.len&&(e=M.len),f=0;f<e;f++)a[b+d+f]=M.ptr[M.off+f];if(M.off+=e,M.len-=e,d+=e,0==M.len){var g;g=M,M=M.next,Za(g)}}if(d==c)return d;if(R<Q){for(e=c-d,e>Q-R&&(e=Q-R),f=0;f<e;f++)a[b+d+f]=P[R+f];R+=e,d+=e,Q==R&&(Q=R=0)}return d}function qb(){var a,b,c,d,e;if(0==qa[0].dl){for(sa.dyn_tree=na,sa.static_tree=pa,sa.extra_bits=Sa,sa.extra_base=B+1,sa.elems=D,sa.max_length=y,sa.max_code=0,ta.dyn_tree=oa,ta.static_tree=qa,ta.extra_bits=Ta,ta.extra_base=0,ta.elems=E,ta.max_length=y,ta.max_code=0,ua.dyn_tree=ra,ua.static_tree=null,ua.extra_bits=Ua,ua.extra_base=0,ua.elems=F,ua.max_length=z,ua.max_code=0,c=0,d=0;d<A-1;d++)for(Ca[d]=c,a=0;a<1<<Sa[d];a++)Aa[c++]=d;for(Aa[c-1]=d,e=0,d=0;d<16;d++)for(Da[d]=e,a=0;a<1<<Ta[d];a++)Ba[e++]=d;for(e>>=7;d<E;d++)for(Da[d]=e<<7,a=0;a<1<<Ta[d]-7;a++)Ba[256+e++]=d;for(b=0;b<=y;b++)va[b]=0;for(a=0;a<=143;)pa[a++].dl=8,va[8]++;for(;a<=255;)pa[a++].dl=9,va[9]++;for(;a<=279;)pa[a++].dl=7,va[7]++;for(;a<=287;)pa[a++].dl=8,va[8]++;for(ub(pa,D+1),a=0;a<E;a++)qa[a].dl=5,qa[a].fc=Fb(a,5);rb()}}function rb(){var a;for(a=0;a<D;a++)na[a].fc=0;for(a=0;a<E;a++)oa[a].fc=0;for(a=0;a<F;a++)ra[a].fc=0;na[C].fc=1,Ka=La=0,Fa=Ga=Ha=0,Ia=0,Ja=1}function sb(a,b){for(var c=wa[b],d=b<<1;d<=xa&&(d<xa&&gb(a,wa[d+1],wa[d])&&d++,!gb(a,c,wa[d]));)wa[b]=wa[d],b=d,d<<=1;wa[b]=c}function tb(a){var h,i,j,k,l,m,b=a.dyn_tree,c=a.extra_bits,d=a.extra_base,e=a.max_code,f=a.max_length,g=a.static_tree,n=0;for(k=0;k<=y;k++)va[k]=0;for(b[wa[ya]].dl=0,h=ya+1;h<J;h++)i=wa[h],k=b[b[i].dl].dl+1,k>f&&(k=f,n++),b[i].dl=k,i>e||(va[k]++,l=0,i>=d&&(l=c[i-d]),m=b[i].fc,Ka+=m*(k+l),null!=g&&(La+=m*(g[i].dl+l)));if(0!=n){do{for(k=f-1;0==va[k];)k--;va[k]--,va[k+1]+=2,va[f]--,n-=2}while(n>0);for(k=f;0!=k;k--)for(i=va[k];0!=i;)j=wa[--h],j>e||(b[j].dl!=k&&(Ka+=(k-b[j].dl)*b[j].fc,b[j].fc=k),i--)}}function ub(a,b){var e,f,c=new Array(y+1),d=0;for(e=1;e<=y;e++)d=d+va[e-1]<<1,c[e]=d;for(f=0;f<=b;f++){var g=a[f].dl;0!=g&&(a[f].fc=Fb(c[g]++,g))}}function vb(a){var e,f,b=a.dyn_tree,c=a.static_tree,d=a.elems,g=-1,h=d;for(xa=0,ya=J,e=0;e<d;e++)0!=b[e].fc?(wa[++xa]=g=e,za[e]=0):b[e].dl=0;for(;xa<2;){var i=wa[++xa]=g<2?++g:0;b[i].fc=1,za[i]=0,Ka--,null!=c&&(La-=c[i].dl)}for(a.max_code=g,e=xa>>1;e>=1;e--)sb(b,e);do e=wa[x],wa[x]=wa[xa--],sb(b,x),f=wa[x],wa[--ya]=e,wa[--ya]=f,b[h].fc=b[e].fc+b[f].fc,za[e]>za[f]+1?za[h]=za[e]:za[h]=za[f]+1,b[e].dl=b[f].dl=h,wa[x]=h++,sb(b,x);while(xa>=2);wa[--ya]=wa[x],tb(a),ub(b,g)}function wb(a,b){var c,e,d=-1,f=a[0].dl,g=0,h=7,i=4;for(0==f&&(h=138,i=3),a[b+1].dl=65535,c=0;c<=b;c++)e=f,f=a[c+1].dl,++g<h&&e==f||(g<i?ra[e].fc+=g:0!=e?(e!=d&&ra[e].fc++,ra[G].fc++):g<=10?ra[H].fc++:ra[I].fc++,g=0,d=e,0==f?(h=138,i=3):e==f?(h=6,i=3):(h=7,i=4))}function xb(a,b){var c,e,d=-1,f=a[0].dl,g=0,h=7,i=4;for(0==f&&(h=138,i=3),c=0;c<=b;c++)if(e=f,f=a[c+1].dl,!(++g<h&&e==f)){if(g<i){do eb(e,ra);while(0!=--g)}else 0!=e?(e!=d&&(eb(e,ra),g--),eb(G,ra),Eb(g-3,2)):g<=10?(eb(H,ra),Eb(g-3,3)):(eb(I,ra),Eb(g-11,7));g=0,d=e,0==f?(h=138,i=3):e==f?(h=6,i=3):(h=7,i=4)}}function yb(){var a;for(wb(na,sa.max_code),wb(oa,ta.max_code),vb(ua),a=F-1;a>=3&&0==ra[Va[a]].dl;a--);return Ka+=3*(a+1)+5+5+4,a}function zb(a,b,c){var d;for(Eb(a-257,5),Eb(b-1,5),Eb(c-4,4),d=0;d<c;d++)Eb(ra[Va[d]].dl,3);xb(na,a-1),xb(oa,b-1)}function Ab(a){var e,f,g,h;if(h=ea-Z,Ea[Ha]=Ia,vb(sa),vb(ta),g=yb(),e=Ka+3+7>>3,f=La+3+7>>3,f<=e&&(e=f),h+4<=e&&Z>=0){var i;for(Eb((b<<1)+a,3),Gb(),cb(h),cb(~h),i=0;i<h;i++)bb(T[Z+i])}else f==e?(Eb((c<<1)+a,3),Cb(pa,qa)):(Eb((d<<1)+a,3),zb(sa.max_code+1,ta.max_code+1,g+1),Cb(na,oa));rb(),0!=a&&Gb()}function Bb(a,b){if(V[Fa++]=b,0==a?na[b].fc++:(a--,na[Aa[b]+B+1].fc++,oa[fb(a)].fc++,U[Ga++]=a,Ia|=Ja),Ja<<=1,0==(7&Fa)&&(Ea[Ha++]=Ia,Ia=0,Ja=1),ka>2&&0==(4095&Fa)){var e,c=8*Fa,d=ea-Z;for(e=0;e<E;e++)c+=oa[e].fc*(5+Ta[e]);if(c>>=3,Ga<parseInt(Fa/2)&&c<parseInt(d/2))return!0}return Fa==n-1||Ga==p}function Cb(a,b){var c,d,i,j,e=0,f=0,g=0,h=0;if(0!=Fa)do 0==(7&e)&&(h=Ea[g++]),d=255&V[e++],0==(1&h)?eb(d,a):(i=Aa[d],eb(i+B+1,a),j=Sa[i],0!=j&&(d-=Ca[i],Eb(d,j)),c=U[f++],i=fb(c),eb(i,b),j=Ta[i],0!=j&&(c-=Da[i],Eb(c,j))),h>>=1;while(e<Fa);eb(C,a)}function Eb(a,b){Y>Db-b?(X|=a<<Y,cb(X),X=a>>Db-Y,Y+=b-Db):(X|=a<<Y,Y+=b)}function Fb(a,b){var c=0;do c|=1&a,a>>=1,c<<=1;while(--b>0);return c>>1}function Gb(){Y>8?cb(X):Y>0&&bb(X),X=0,Y=0}function Hb(){if(0!=Q){var a,b;for(a=$a(),null==M?M=N=a:N=N.next=a,a.len=Q-R,b=0;b<a.len;b++)a.ptr[b]=P[R+b];Q=R=0}}var L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,aa,ba,ca,da,ea,fa,ga,ha,ia,ja,ka,la,ma,na,oa,pa,qa,ra,sa,ta,ua,va,wa,xa,ya,za,Aa,Ba,Ca,Da,Ea,Fa,Ga,Ha,Ia,Ja,Ka,La,Ma,Na,a=32768,b=0,c=1,d=2,e=6,f=!0,g=32768,h=64,i=8192,j=2*a,k=3,l=258,m=16,n=8192,o=13,p=n,q=1<<o,r=q-1,s=a-1,t=0,u=4096,v=l+k+1,w=a-v,x=1,y=15,z=7,A=29,B=256,C=256,D=B+1+A,E=30,F=19,G=16,H=17,I=18,J=2*D+1,K=parseInt((o+k-1)/k),P=null,Sa=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Ta=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Ua=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Va=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Wa=[new Qa(0,0,0,0),new Qa(4,4,8,4),new Qa(4,5,16,8),new Qa(4,6,32,32),new Qa(4,4,16,16),new Qa(8,16,32,32),new Qa(8,16,128,128),new Qa(8,32,128,256),new Qa(32,128,258,1024),new Qa(32,258,258,4096)],Db=16;return function(b,c){var d,f;Ma=b,Na=0,"undefined"==typeof c&&(c=e),Xa(c);for(var g=new Array(1024),h=[];(d=ob(g,0,g.length))>0;){var i=new Array(d);for(f=0;f<d;f++)i[f]=String.fromCharCode(g[f]);h[h.length]=i.join("")}return Ma=null,h.join("")}}();
module.exports = deflate;
