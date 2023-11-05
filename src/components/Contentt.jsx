import { useNavigate } from "react-router-dom";
import React, { useState, useRef } from "react";
import weddingMusic from "../styles/music.mp3";
import weddingImage2 from "../styles/images/brave2.jpeg";
import Image1 from "../styles/images/1.jpg";
import Image2 from "../styles/images/2.jpg";
import Image3 from "../styles/images/3.jpg";
import Image4 from "../styles/images/4.jpg";

const Contentt = () => {
  const navigate = useNavigate();
  const audioRef = useRef(null); // Referensi ke elemen audio

  const [audioPlayed, setAudioPlayed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  function playAudio() {
    if (!audioPlayed) {
      audioRef.current.play();
      setAudioPlayed(true);
      setIsPlaying(true);
    } else {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }

  return (
    <div className="content container">
      <div className="image-container">
        <img className="image" src={weddingImage2} alt="" />
        <h1 className="judul">Judul Invitation</h1>
        <button className="kembali" onClick={() => navigate("/")}>
          Cover
        </button>
        <div className="frame">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia rem
            repellat a harum. Officiis numquam quia dolore laborum autem ducimus
            quas nobis nulla dolorem deserunt, quibusdam fugiat atque, explicabo
            praesentium!
          </p>
        </div>
      </div>

      <div className="quotes-container">
        <div className="box">
          <div className="image"></div>
          <div className="frame">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              rem repellat a harum. Officiis numquam quia dolore laborum autem
              ducimus quas nobis nulla dolorem deserunt, quibusdam fugiat atque,
              explicabo praesentium!
            </p>
          </div>
        </div>
      </div>

      <div className="profile-text">
        <div className="frame">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia rem
            repellat a harum. Officiis numquam quia dolore laborum autem ducimus
            quas nobis nulla dolorem deserunt, quibusdam fugiat atque, explicabo
            praesentium!
          </p>
        </div>
      </div>

      <div className="profile-container">
        <div className="bg"></div>
        <div className="profile-group">
          <div className="profile">
            <div className="image"></div>
            <h1 className="nama">Nama</h1>
            <h3 className="keterangan">Orangtua</h3>
            <button className="button-profile">Tombol</button>
          </div>
          <div className="profile">
            <div className="image"></div>
            <h1 className="nama">Nama</h1>
            <h3 className="keterangan">Orangtua</h3>
            <button className="button-profile">Tombol</button>
          </div>
        </div>
      </div>

      <div className="story-container">
        <div className="image"></div>
        <h3>Halo World</h3>
        <button>Tombol</button>
      </div>

      <div className="date-container">
        <div className="date-group">
          <div className="judul-group">
            <div className="judul">
              <h3>Hello World Hello World</h3>
              <h5>Halo World</h5>
            </div>
            <div className="waktu">
              <h1>0.0.0.0</h1>
            </div>
          </div>

          <div className="date-block">
            <div className="image"></div>

            <div className="keterangan">
              <div className="icon"></div>
              <div className="judul">
                <h4>Hello World</h4>
              </div>
              <div className="deskripsi">
                <div className="frame">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia rem repellat a harum. Officiis numquam quia dolore
                    laborum autem ducimus quas nobis nulla dolorem deserunt,
                    quibusdam fugiat atque, explicabo praesentium!
                  </p>
                </div>
              </div>
            </div>
            <div className="keterangan2">
              <div className="icon"></div>
              <div className="judul">
                <h4>Hello World</h4>
              </div>
              <div className="deskripsi">
                <div className="frame">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia rem repellat a harum. Officiis numquam quia dolore
                    laborum autem ducimus quas nobis nulla dolorem deserunt,
                    quibusdam fugiat atque, explicabo praesentium!
                  </p>
                </div>
              </div>
            </div>

            <div className="tombol-keterangan-group">
              <button>Tombol</button>
              <button>Tombol</button>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-text">
        <div className="frame">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia rem
            repellat a harum. Officiis numquam quia dolore laborum autem ducimus
            quas nobis nulla dolorem deserunt, quibusdam fugiat atque, explicabo
            praesentium!
          </p>
        </div>
      </div>

      <div class="formulir-container">
        <div class="form-container">
          <form>
            <input type="text" required placeholder="Nama" />
            <textarea
              id="alamat"
              name="alamat"
              rows="4"
              required
              placeholder="Alamat"
            ></textarea>
            <label for="kedatangan">Apakah datang?</label>
            <select id="kedatangan" name="kedatangan" required>
              <option value="pria">Ya</option>
              <option value="wanita">Tidak</option>
            </select>
            <label for="tamu">Jumlah tamu</label>
            <select id="tamu" name="tamu" required>
              <option value="pria">1</option>
              <option value="wanita">2</option>
            </select>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <div className="profile-text">
        <div className="frame">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia rem
            repellat a harum. Officiis numquam quia dolore laborum autem ducimus
            quas nobis nulla dolorem deserunt, quibusdam fugiat atque, explicabo
            praesentium!
          </p>
        </div>
      </div>

      <div class="video-container">
        <div className="video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/TDi-hGRYX6g?si=q8tz7BCs8cFxKTPP"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div className="video-button">
            <h4>helloworld</h4>
            <button>tombol</button>
          </div>
        </div>

        <div className="gift">
          <div className="frame">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              rem repellat a harum. Officiis numquam quia dolore laborum autem
              ducimus quas nobis nulla dolorem deserunt, quibusdam fugiat atque,
              explicabo praesentium!
            </p>
          </div>
          <button>tombol</button>
          <button>tombol</button>
          <button>tombol</button>
        </div>
      </div>

      <div class="gallery-container">
        <div class="slider">
          <div class="images">
            <input type="radio" name="slide" id="img1" checked />
            <input type="radio" name="slide" id="img2" />
            <input type="radio" name="slide" id="img3" />
            <input type="radio" name="slide" id="img4" />

            <img src={Image1} class="m1" alt="img1" />
            <img src={Image2} class="m2" alt="img2" />
            <img src={Image3} class="m3" alt="img3" />
            <img src={Image4} class="m4" alt="img4" />
          </div>
          <div class="dots">
            <label for="img1"></label>
            <label for="img2"></label>
            <label for="img3"></label>
            <label for="img4"></label>
          </div>
        </div>
      </div>

      {/* <div className="filter-container">
        <div className="judul">
          <h1>Hello World</h1>
          <h4>Hello World2</h4>
          <div className="frame">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              rem repellat a harum. Officiis numquam quia dolore laborum autem
              ducimus quas nobis nulla dolorem deserunt, quibusdam fugiat atque,
              explicabo praesentium!
            </p>
          </div>
        </div>
        <div className="images"></div>
        <button>Tombol</button>
      </div> */}

      <div className="comment-container">
        <div className="comment-group">
          <div className="judul">
            <h1>Hello World</h1>
            <h4>Hello World</h4>
          </div>
          <div className="comment">
            <form>
              <input type="text" required placeholder="Nama" />
              <textarea
                id="alamat"
                name="alamat"
                rows="4"
                required
                placeholder="Alamat"
              ></textarea>
              <button>Tombol</button>
            </form>
          </div>
        </div>
        <div class="message">
          <div class="user-profile">
            <div class="profile-initial">J</div>
          </div>
          <div class="comment-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vel libero ac arcu vestibulum mattis.
            </p>
          </div>
        </div>
        <div class="message">
          <div class="user-profile">
            <div class="profile-initial">J</div>
          </div>
          <div class="comment-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vel libero ac arcu vestibulum mattis.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="comment-container">
        <div className="comment">
          <div className="image"></div>

          <div className="judul">
            <h1>Hello World</h1>
            <h4>Hello World2</h4>
          </div>
          <div class="form-container">
            <form>
              <input type="text" required placeholder="Nama" />
              <textarea
                id="alamat"
                name="alamat"
                rows="4"
                required
                placeholder="Alamat"
              ></textarea>
              <button>Tombol</button>
            </form>
          </div>
        </div>
        <div className="message"></div>
      </div> */}

      <div className="profile-text">
        <div className="frame">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia rem
            repellat a harum. Officiis numquam quia dolore laborum autem ducimus
            quas nobis nulla dolorem deserunt, quibusdam fugiat atque, explicabo
            praesentium!
          </p>
        </div>
      </div>

        
        <div className="music-container">
          <button onClick={playAudio}>
            {isPlaying ? "Pause Sound" : "Play Sound"}
          </button>
          {/* {audioPlayed && (
            <p>{isPlaying ? "Audio sedang diputar..." : "Audio dijeda"}</p>)} */}
          <audio ref={audioRef} src={weddingMusic}></audio>
        </div>

      <footer className="footer-container">
        <div className="frame">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia rem
            repellat a harum. Officiis numquam quia dolore laborum autem ducimus
            quas nobis nulla dolorem deserunt, quibusdam fugiat atque, explicabo
            praesentium!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contentt;
