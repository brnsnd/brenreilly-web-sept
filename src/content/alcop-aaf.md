# Exporting AAF from Premiere Pro 2022 for Pro Tools

## 1. Export AAF from Premiere
1. In Premiere, go to: **File → Export → AAF**.  

2. In the AAF Export Settings window, set:  
   - **Mixdown Video**: ❌ (don’t include).  
   - **Breakout to Mono**: ✅ (required for Pro Tools).  
   - **Render**: `Copy All Media`.  
   - **Handle Length**: `120 frames` (~5 seconds).  
   - **Sample Rate**: `48000 Hz`.  
   - **Bit Depth**: `24-bit`.  
   - **Embedded Media**: ❌ (avoid corruption).  
   - **Separate Audio Folder**: ✅ (AAF file + audio folder).  

3. **Save to a New Folder in a New Location**  
   - Create a new folder on a fast, local drive.  
   - Use a clear naming convention:  
     ```
     ProjectName_AAF_Date/
       ├── ProjectName.aaf
       ├── Audio Files/
       └── Reference Video.mov
     ```  

---

## 2. Deliverables
1. **AAF File** — the session structure (usually <100 MB).  
2. **Media Folder** — consolidated audio clips with handles (majority of size).  
3. **Reference Video** — export separately for Pro Tools:  
   - Codec: DNxHD36 or ProRes LT preferred; H.264 acceptable.  
   - Include Burn-in Timecode (recommended).  
   - Stereo mixdown track included.  
4. **Track Sheet / Notes** — document track layout if complex.  

---

## 3. File Size Expectations
- Short film (10–20 min): **2–10 GB**.  
- Feature (90–120 min): **20–100 GB+**.  
- AAF header file: **<100 MB**.  

⚠️ Rule of thumb:  
- **<2 GB total** → probably exported with embedded media (bad).  
- **10 GB+** → correct (separate folder with handles).  

---

## 4. Common Pitfalls
- ❌ Exporting stereo interleaved clips.  
  → Always choose **Breakout to Mono**.  

- ❌ Embedding media in the AAF.  
  → Always export to a **separate folder**.  

- ❌ Forgetting a reference video.  
  → Always provide a video file for sync and spotting.  

- ❌ Using bad file names.  
  → Stick to alphanumerics + underscores. Avoid Spaces. Example: `ACLOP-REEL-ONE_AAF_v1_2025-09-23.aaf`.  

---

## 5. Upload to Dropbox
1. Compress the folder into a ZIP before upload:  
   - Right-click the **ProjectName_AAF_Date/** folder → “Compress” / “Zip”.  
   - Resulting file: `ProjectName_AAF_Date.zip`.  

2. Go to the Dropbox File Request link: 
   👉 [**Upload Here**](https://www.dropbox.com/request/VhVUV7RHyA7T5AkrbHS8)  

3. Upload the ZIP file.  
   - Double-check it is the **full ZIP folder** (AAF + Audio Files + Reference Video).  
   - Confirm upload finishes before closing browser.  

---

✅ You now have a **Pro Tools–ready AAF export** from Premiere Pro 2022, delivered in a clean folder and uploaded to Dropbox.