# ALCOP Dx Audio Options
## The Problem
- **Sub-optimal audio quality from shoot**
  - Loud location noise floor
  - Poor boom mic positioning
- **Combined Dialogue & SFX**
  - Current picture edit has a single mixed-down track with both DX & SFX
---
## The Goal
- **OPTION A (Ideal):** Obtain a clean, mix-ready DX track fully separated from SFX  
- **OPTION B (Fallback):** Suppress noise/artifacts on the combined DX/SFX track for improved intelligibility
---
## Potential Solutions — OPTION A

### 1. AI-Based Separation (Emerging Products)
- **AudioShake – Dialogue, Music & Effects**
  - Studio-grade AI separation; trusted by Disney and other majors  
  - [audioshake.ai](https://www.audioshake.ai/?utm_source=chatgpt.com)  
  - Cost: **$20–$99/mo (Indie)**; **enterprise film use is custom (≈$2K–$5K per feature)** 
  - Trial: Free Indie tier (2 stems/mo), enterprise demo available  
- **Moises – Multimedia Tracks**
  - Separates into Dialogue, Soundtrack, and Effects stems  
  - [moises.ai](https://moises.ai/features/multimedia-tracks/?utm_source=chatgpt.com)  
  - Cost: **$6/mo (Premium)** to **$30/mo (Pro)**  
  - Trial: Free tier (5 separations/mo) + Premium trial  
- **Music AI – Cinematic Stems**
  - Purpose-built for DX/MX/FX separation in film/TV pipelines  
  - [music.ai](https://music.ai/modules/stem-separation/cinematic-stems/?utm_source=chatgpt.com)  
  - Cost: **$0.05/minute processed (~$5 per feature)**  
  - Trial: None public; demo available on request  
**Pros:**  
- Fast turnaround compared to manual re-edit  
- Potentially strong results (esp. for localization, temp mixes)  
- Predictable pricing models  
**Cons:**  
- Tech not fully proven in high-budget feature workflows  
- Possible artifacts / phasing issues  
- Legal/licensing coverage varies (AudioShake safest for enterprise)  
---
### 2. Manual Re-Edit from Source DX
- **Tools:** Pro Tools, iZotope RX  
- **Labor:** ~20–40 hrs per reel (100–200 hrs for full feature)  
- **Pros:** Cleanest results, minimal AI artifacts  
- **Cons:** Extremely time/labor intensive, higher cost in wages  
---
### 3. Use Pre-Separated "Angelo / SD1" Tracks
- **Noise Reduction / Clean-Up Tools**  
  - iZotope RX, Acon DeNoise, Adobe Enhance Speech  
  - Klevgrand Brusfri, Waves Clarity Vx Pro, CrumplePop Clean Audio AI  
- **Editing Platforms**  
  - Pro Tools, DaVinci Resolve  
- **Pros:** Faster than re-editing from scratch, Leverages existing track structure  
- **Cons:** Further processing may degrade audio quality, Noise reduction introduces artifacts if pushed too hard  
---
## Potential Solutions — OPTION B
### 1. Artifact-Suppressed DX/SFX Track
- **Tools:** Pro Tools + iZotope RX  
- **Approach:** Work only on the current mixed track; suppress noise/artifacts as much as possible  
- **Pros:** Quick, low labor hours  
- **Cons:** Artifacts remain, intelligibility may suffer, limits final mix flexibility  
---
## Additional Considerations
- **Licensing / Legal**: Only enterprise-grade AI tools (e.g. AudioShake Live) provide clear IP indemnification; consumer tools (Moises, Music AI) may present rights risk in studio contexts.  
- **Export Fidelity**: Verify delivery spec (48kHz/24bit WAV minimum). Some AI tools default to MP3 unless upgraded.  
- **QC Passes**: Plan on 2–3 passes per reel for professional-quality deliverables, which can triple costs in per-minute pricing models.  
- **Cost / Reel View**:  
  - AudioShake Live: ~$400–$1,000 per reel  
  - Moises Pro: Flat $30/mo (covers full feature)  
  - Music AI: ~$1 per reel ($5 per feature, single pass)  

---