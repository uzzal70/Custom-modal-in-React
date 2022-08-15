import { motion } from "framer-motion";
import { useRef, useState } from "react";
import "./App.css";
import CustomModal from "./Component/CustomModal";

function App() {
    const [modal, setModal] = useState(false);
    if (modal) {
        document.body.classList.add("active-modal");
    } else {
        document.body.classList.remove("active-modal");
    }
    const modalref = useRef();
    // const animation = useSpring({
    //     config: {
    //         duration: 250,
    //     },
    //     opacity: modal ? 1 : 0,
    //     transform: sh
    // });

    return (
        <div style={{ padding: "100px", textAlign: "center" }}>
            <button className="btn-modal-open" onClick={() => setModal(!modal)}>
                Modal Open
            </button>

            {modal && (
                <div className="modal">
                    <div
                        className="overlay"
                        onClick={() => setModal(!modal)}
                    ></div>
                    <motion.div
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            // damping: 20,
                        }}
                    >
                        <div className="modal-open">
                            <h2>Modal Title</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Necessitatibus nisi iste
                                molestias corporis ea maxime, expedita non hic
                                quis libero quisquam voluptate voluptatibus
                                quasi veniam? Pariatur tempore temporibus
                                maiores facere, dolore culpa et. Maiores
                                voluptate at, iusto itaque facere qui aut fuga
                                ad fugiat possimus dolor minus nobis totam
                                veritatis cupiditate pariatur aperiam, quas
                                voluptas error! Maxime optio ratione,
                                perferendis sapiente hic quod molestias culpa.
                                At odit possimus mollitia quos. Asperiores
                                veniam saepe at maiores minus placeat aspernatur
                                neque. Dignissimos voluptates eveniet alias
                                molestiae dolore fugiat ex, nam earum? Odit
                                perspiciatis esse dolores, eaque distinctio quas
                                aspernatur minima ratione architecto.
                            </p>
                            <button
                                className="btn-modal-close"
                                onClick={() => setModal(!modal)}
                            >
                                Close
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                facere magnam, veritatis error esse rem eligendi possimus
                dolores perferendis est vitae, placeat inventore a excepturi
                harum. Hic ipsam incidunt magnam voluptas corrupti eos
                similique, vel accusamus, dolorem esse nostrum temporibus
                necessitatibus nam animi assumenda sint soluta illo, eum dolore
                id neque! Possimus dolor, nulla at culpa sequi voluptates
                aspernatur. Ipsum eveniet aperiam reprehenderit rerum culpa
                voluptatum, voluptas quam nobis illum aliquid cum fuga suscipit
                quo placeat maxime ullam, eaque ipsam minus veniam inventore
                quas. Quia debitis explicabo architecto corporis rerum ea, nulla
                vel molestias. Atque a molestiae voluptas aut explicabo
                consequuntur ad aliquid fugiat culpa odio! Molestias inventore
                eius soluta delectus odio, numquam maxime voluptatum quo enim
                deleniti eum ullam quia porro molestiae debitis. Vel harum qui
                animi quo maiores, at, quos quia quibusdam dicta similique
                facilis iste necessitatibus voluptatibus natus commodi doloribus
                tenetur, cumque deleniti magnam atque voluptate vero! Minima
                distinctio eius nisi. Nulla ducimus assumenda nisi amet facere
                id velit commodi reiciendis quia voluptatum natus, tempora quas
                saepe eligendi unde ab, repellat deleniti aut officiis provident
                earum tenetur? Nesciunt harum, debitis laborum quisquam nobis,
                excepturi temporibus vero fugiat voluptatibus doloremque id
                dignissimos odit animi amet et iure. Fugit iste nemo quibusdam
                ipsa reprehenderit, ullam accusantium velit voluptate enim vero
                nostrum nam eaque sunt hic maxime maiores atque. Nostrum
                reprehenderit est et provident maxime ipsum deleniti quae eos
                qui vitae obcaecati molestiae nam fugiat, dolorem neque dolores
                eum, minima nobis fuga nihil magni tempore. Repudiandae,
                eligendi animi. Unde fugiat animi quo reprehenderit quos
                laudantium, explicabo voluptatibus ipsam dolor illo deleniti
                architecto doloremque veritatis expedita impedit id est quia
                assumenda ex tempore accusamus omnis magnam nihil accusantium.
                Iure dicta mollitia repellendus? Sint vel quae blanditiis? Quam
                odio expedita nostrum eveniet vel aliquid dolorem, deserunt
                illum, laudantium at omnis nobis repellat labore voluptas
                ratione quidem ea repellendus laborum? Dicta fugit ipsam,
                similique velit voluptatum aliquid. Eveniet eligendi explicabo
                earum numquam, tempore voluptas laboriosam vel harum beatae
                blanditiis? Temporibus neque tempora illum nesciunt alias
                aliquam, inventore tempore molestiae voluptates iste atque hic.
                Nulla et voluptates iure corporis. Esse a eum asperiores
                doloribus iusto assumenda enim inventore dolor libero non
                temporibus saepe, voluptates, hic aliquam tempora ipsum. Culpa
                exercitationem voluptatum eveniet ipsa dicta tempore, a
                accusamus ullam officia rerum magni similique eius velit
                obcaecati facilis hic. Natus error provident ipsa. Aliquam rem
                eos ratione nemo hic laudantium, excepturi ab vitae nobis
                temporibus unde ipsum pariatur aperiam commodi, maxime suscipit
                voluptates et earum eveniet, officia obcaecati fugit dicta enim?
                Enim, corrupti, sint eveniet repudiandae, earum non amet illum
                officia dignissimos nam architecto harum ut doloremque. Suscipit
                officia odio inventore maiores deleniti possimus obcaecati quos
                adipisci nobis repudiandae reiciendis laboriosam voluptate non
                distinctio, nesciunt incidunt architecto praesentium labore
                neque et. Tempore, at repudiandae fugit perferendis debitis
                obcaecati blanditiis labore voluptatibus voluptatum dicta quae
                eum saepe laboriosam autem perspiciatis quis sed? Illo
                voluptatibus perferendis totam cupiditate nemo corporis ipsa
                voluptas qui magni! Veritatis aut, soluta corporis quas illum
                vel corrupti quasi. At accusamus sequi itaque expedita
                voluptatem obcaecati sunt officia adipisci? Excepturi corrupti
                velit animi rerum earum officia cumque eos maxime, nihil vel
                eligendi asperiores quaerat tenetur repellat aliquid eaque fugit
                quod quos quidem impedit quis magnam, ab nam. Eius, modi eaque
                autem esse ducimus maxime nulla quasi molestias possimus
                architecto ad iure ea officia perspiciatis voluptatum voluptatem
                quae pariatur sint debitis, adipisci reiciendis veniam nostrum?
                Ad cumque facilis culpa animi eum explicabo voluptates,
                excepturi perferendis veniam exercitationem corporis deserunt
                asperiores enim nemo quo repudiandae, rerum labore quod?
                Sapiente incidunt, fugit odio voluptatum iure, sed fugiat dolor
                quia expedita tempore voluptatibus reprehenderit qui accusamus
                nostrum distinctio aut, dicta est placeat. Quisquam tempora
                atque, distinctio in magnam laborum. Nemo sed reiciendis,
                delectus minima sit numquam modi sint debitis repudiandae
                ducimus quos dignissimos adipisci at officiis odio voluptas quae
                odit officia corporis, nobis sunt mollitia dicta recusandae?
                Nihil ipsum ex officia sed, rerum voluptate saepe dolorem
                quisquam aliquam sequi aliquid animi, voluptatum voluptatem quae
                adipisci tempora enim accusantium amet velit pariatur illum eum
                sunt officiis. At dolores facilis accusamus, aliquam architecto
                vitae. Soluta nihil ratione fugit itaque laudantium sit quae,
                minus dicta laborum exercitationem velit ab ullam aspernatur
                quasi sint, asperiores quos excepturi ut temporibus perferendis?
                Esse perspiciatis ex quibusdam, quae fugiat corrupti enim
                pariatur molestiae dignissimos recusandae eaque magnam, hic vel
                reprehenderit mollitia illum, aspernatur atque sed.
                Necessitatibus repellendus alias error pariatur autem rem unde!
                Reprehenderit magni ut enim inventore expedita minima eius quae
                at cumque, perferendis laborum autem obcaecati dolore odit,
                incidunt nisi sequi corrupti veritatis doloribus quas molestias
                voluptate dignissimos rem minus! Ipsum doloribus et quisquam
                officiis! Hic, facere praesentium! Necessitatibus fugiat dolorum
                nihil quod deleniti sed animi facilis corporis voluptatum et ad
                sint laborum laboriosam hic iure quaerat perspiciatis eaque
                commodi ut recusandae labore natus, nesciunt beatae voluptate.
                Soluta voluptate eius molestias ut saepe perspiciatis autem
                dolorem, repellat magnam aliquid itaque, odit voluptatem
                accusantium sit fugit enim, laboriosam repellendus ipsa dolor!
                Cumque earum, sit officia minima praesentium omnis explicabo
                dolores sunt, et veritatis laboriosam consequatur id iusto
                animi. Magnam nobis fugit eligendi atque. Esse inventore earum
                voluptate, eum dolorum consequatur libero repellat veritatis
                fugiat velit tenetur similique ducimus natus aperiam iure beatae
                blanditiis illum omnis labore, perspiciatis consectetur
                doloribus! Voluptate earum in excepturi quidem esse ipsa ipsum
                odit iste sequi incidunt soluta culpa sit vitae magnam dolore
                provident modi officia placeat, aliquam quia quasi delectus?
                Corrupti quod natus, nam eos esse deleniti laudantium dicta
                nobis praesentium incidunt officia animi voluptatem, totam
                laborum, veniam et soluta aliquam dignissimos vel temporibus
                commodi ipsa est omnis. Ex accusantium praesentium, nostrum
                cumque rerum quas doloremque labore, alias voluptatum eligendi
                libero quo? Illum dolore soluta et laudantium voluptate minus
                laborum aliquid consequatur ratione sed! Fuga culpa ratione
                asperiores, commodi dolore eos earum nemo molestias, alias iste
                dignissimos? Culpa beatae tempore quasi ullam distinctio fuga,
                sit nam autem porro aliquid in perferendis, sequi a atque
                aspernatur dolores rem odio. Molestiae blanditiis id, veniam,
                vitae labore excepturi neque nam maiores temporibus sit
                perspiciatis sapiente tempore ducimus nulla odio quis iusto
                soluta, sint reiciendis. Eveniet, expedita asperiores. Alias
                nostrum a, animi illum veniam quia totam molestiae eveniet, iste
                dolorum aut ipsa repellendus distinctio perspiciatis
                dignissimos! Impedit libero officia, voluptate ipsam architecto
                obcaecati? Et voluptas non praesentium dolores voluptates cum
                fugiat illo repellendus placeat qui vel laboriosam sint minima
                iusto totam quis repudiandae tempore id, magnam ex soluta
                laudantium neque architecto perferendis! Commodi incidunt
                tempore laudantium totam, saepe tempora illo asperiores
                delectus. Cupiditate molestias atque quis expedita? Dicta nihil,
                doloremque, qui molestiae pariatur nesciunt fugiat sint saepe,
                aspernatur dolores amet maiores doloribus recusandae corporis
                odit hic consectetur eius repellendus mollitia quibusdam
                possimus? Unde vitae deserunt vel in optio, voluptatem, at
                reiciendis, fugiat totam sequi explicabo illo ipsam eius
                molestias. Reiciendis doloremque esse nostrum natus ipsum
                eligendi asperiores ullam facere rerum fugit, cupiditate sunt,
                veniam recusandae delectus voluptates similique corrupti sequi
                aliquam quae. Praesentium reprehenderit, iusto officiis hic
                placeat ea ab. Nam ad unde quasi. Vero ipsum repellat, libero
                repellendus modi est consequuntur reiciendis voluptas natus
                impedit quibusdam necessitatibus id quos facilis laudantium?
                Culpa, nostrum cumque minus earum alias consequuntur laudantium
                labore voluptatum quibusdam recusandae qui mollitia iste eum
                quidem tenetur praesentium illo. Quaerat quos assumenda atque
                aliquam, fuga, vitae cumque nostrum nobis nam alias quisquam
                saepe a debitis earum sit recusandae. Sint placeat temporibus
                itaque ratione expedita ullam, quo neque deserunt laudantium
                voluptatum sit doloremque quam, voluptate quisquam natus,
                voluptas ea accusantium dolore error libero! Aperiam atque
                necessitatibus numquam obcaecati voluptatibus fuga, vitae
                mollitia possimus unde repellat soluta facere aliquam aut sunt
                ea saepe exercitationem distinctio nostrum quis iste? Officiis
                suscipit porro, ex enim qui vel voluptatem a beatae tempore quas
                accusantium doloremque, corrupti aliquid? Accusamus culpa
                impedit, tempore consequuntur maxime perspiciatis perferendis
                illum quibusdam id placeat amet quaerat voluptatum natus
                asperiores nostrum cupiditate reprehenderit maiores odit aliquid
                sapiente, illo ab, aperiam magni. Eos at laudantium doloremque
                magnam ducimus repellendus iusto recusandae veritatis voluptas
                facilis, sint tempore eius explicabo molestiae modi? Dicta,
                dolorem aliquid, placeat eaque repellendus quam corporis autem,
                veritatis voluptates sapiente in architecto ex laborum aperiam
                blanditiis dolore ullam sit enim eos accusamus! Earum facilis
                sapiente soluta ipsam? Neque ut vel, reiciendis ipsa nesciunt
                veniam modi sed et similique, aperiam magnam reprehenderit quasi
                sint aliquid nostrum atque odit necessitatibus consequuntur
                eaque quae? Error aliquid doloremque, nemo provident eaque unde!
                Odio minus animi veritatis, nostrum beatae dolor necessitatibus
                dicta? Velit voluptate aperiam laborum ullam eum, tenetur sed
                nam in cum quidem nostrum vero consectetur praesentium
                blanditiis suscipit architecto magnam neque repudiandae illo
                ipsam similique hic, sapiente ab nesciunt. Quos, iste nihil
                adipisci eius minus voluptas veritatis recusandae nemo enim
                inventore vitae nesciunt fugiat autem? Dolorem delectus modi
                neque nostrum quia ut itaque, eius inventore animi provident
                eveniet omnis, laboriosam dicta numquam corrupti et nesciunt,
                consequatur corporis cupiditate asperiores quidem dignissimos
                libero soluta? Obcaecati sapiente voluptatibus labore quibusdam
                laboriosam ratione consequuntur expedita eos error, libero totam
                tempore provident assumenda quaerat. Ea explicabo ut dolorum
                voluptate in facere aliquam id repudiandae commodi! Nam eius
                dolore totam natus beatae temporibus consequuntur nisi, itaque
                et? At ad autem ab tempore ex inventore. Dicta cupiditate quae
                laboriosam reiciendis. Aliquam nam eveniet quas id fugiat illum
                est quod necessitatibus, quia laboriosam libero? Quibusdam nemo
                dignissimos soluta molestiae quis! Architecto, et minus!
                Repellat atque et blanditiis fuga amet. Ipsam ullam itaque sint
                asperiores quia. Similique provident incidunt eaque ad ratione
                non illo beatae, adipisci, voluptatum repudiandae eveniet sit
                dolor nobis, praesentium cum expedita. Facere, sunt perferendis
                eaque nihil iusto beatae corrupti deleniti reprehenderit quis
                amet tempore distinctio at iure cupiditate odio provident
                corporis adipisci excepturi! Ut laboriosam impedit laudantium
                dolorem placeat incidunt, earum hic vero fugit consequuntur
                molestias, quasi quo rem itaque nihil deleniti, tempore quia
                illo facere voluptates rerum ipsum dolores aut. Quo inventore
                eius dicta quasi suscipit sapiente eos reiciendis fugiat
                corrupti beatae veniam, voluptatum totam consequatur sint?
                Placeat, iste! Eveniet magni rerum autem recusandae, quam eaque
                aspernatur, praesentium atque eum consequatur, et impedit
                ducimus fugit molestiae! Cum quibusdam dolores, possimus dolorum
                eligendi ipsa dignissimos ipsum architecto dolorem maxime
                molestias itaque ad earum odit iste exercitationem eius eveniet!
                Animi dolorem explicabo quam accusamus. Delectus distinctio
                accusamus quidem expedita ab, temporibus commodi, ullam cum
                minus impedit, fugiat aperiam non quod autem eos doloribus
                corporis a molestiae quasi totam? Blanditiis, consequatur libero
                repudiandae, nobis eius dolor praesentium necessitatibus aut
                atque pariatur culpa nihil cupiditate temporibus fugit sint?
                Optio tempore culpa quaerat ea illum aliquam nemo nulla libero
                veritatis fugit quae corporis debitis minima impedit, deserunt
                vitae! Voluptatibus, ab! Non deserunt provident repellat
                expedita laudantium, sit ratione explicabo maxime neque a quidem
                quae nulla reiciendis recusandae necessitatibus laboriosam
                corporis vel enim cumque inventore quia hic pariatur. Placeat
                quaerat ipsum, deserunt quos doloremque unde eum repellendus
                repudiandae repellat saepe, optio at ullam vitae! Distinctio
                ipsam itaque error magnam totam, cumque voluptatibus sunt enim
                consectetur! Expedita voluptatibus minima facilis ipsam minus
                molestiae. Beatae deleniti commodi ut optio harum ad delectus
                esse laborum, dolorem maiores, modi repudiandae voluptas
                tenetur. Quibusdam quo, sint autem aliquid eos facilis ad
                asperiores numquam! Aliquam, mollitia similique. Vitae quibusdam
                aspernatur quasi, vero sint consequatur rem minima tempora
                ratione amet saepe ad ipsa omnis hic eveniet expedita? Nostrum
                blanditiis velit inventore maxime delectus accusamus, eaque
                culpa maiores labore eveniet distinctio dolorem rerum libero?
                Iure velit molestiae perferendis aliquid saepe! Nostrum sed
                quisquam nam repellendus, voluptate voluptas? Temporibus, harum
                est vitae repudiandae, laboriosam velit quam sed optio quisquam
                ut dolore aspernatur quaerat ex, eos molestias. Libero quo
                officiis esse optio, illum architecto magni quibusdam enim!
                Temporibus doloribus sed voluptatum. Amet dolorum aliquam sint
                consequatur tempora, nesciunt provident dolores id laboriosam
                fugiat velit maxime labore atque aliquid earum doloribus, sed ad
                quis in? Placeat dolor corporis exercitationem minus veritatis
                cumque aspernatur voluptas odio eum temporibus natus excepturi,
                ex distinctio omnis sapiente a earum ducimus laboriosam
                deleniti? Maiores quia amet deleniti delectus ea rem quasi iure
                voluptate? Nemo laborum maxime quisquam autem harum aspernatur
                saepe aliquid corporis ea, est sint provident libero fugiat,
                quis expedita blanditiis vitae rerum ab, perspiciatis pariatur
                eum cumque. Voluptatem temporibus labore ipsam asperiores
                laboriosam accusantium, modi sunt.
            </p>
        </div>
    );
}

export default App;
