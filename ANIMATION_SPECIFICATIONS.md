# Animated Background Video Specifications

## Project Overview
Create a looping particle morphing animation for website background use.

## Technical Specifications

### Output Format
- **Format**: WebM (VP9 codec recommended)
- **Resolution**: 1920x1080 (Full HD) minimum, 4K (3840x2160) preferred
- **Frame Rate**: 30fps or 60fps
- **Duration**: 24-30 seconds (full loop)
- **File Size Target**: Under 5MB for Full HD, under 15MB for 4K
- **Compression**: High quality with web optimization
- **Alpha Channel**: No (use solid background)
- **Loop**: Seamless infinite loop (first and last frames must match)

### Color Palette

#### Primary Colors
- **Background**: Pure black `#000000` or very dark grey `#0A0A0A`
- **Primary Accent (Brand)**: `ROY001` - **Need exact hex code from client**
  - *Assuming ROY001 is a vibrant color (please confirm exact value)*
  - Use for main particle color, highlights, and brand elements
- **Secondary**: Pure white `#FFFFFF` for text elements and key highlights
- **Glow Effects**: Use ROY001 color at 20-40% opacity for particle glows

#### Color Application
- All particles: ROY001 color
- Particle cores: Solid ROY001
- Particle glows: ROY001 with blur and opacity
- Brain illustration: ROY001 with white highlights
- Dashboard elements: ROY001 for UI elements, white for text/icons
- Cloud formations: White base with ROY001 highlights/edges

---

## Animation Sequence Timeline

### Total Duration: 24 seconds (loop)

#### Phase 1: Scattered Dots (0:00 - 0:03)
**Duration**: 3 seconds
- **Starting State**: 150-200 particles randomly scattered across the canvas
- **Particle Size**: 2-8px diameter (varied sizes)
- **Particle Opacity**: 60-100% (random variation)
- **Motion**: Gentle floating motion (slow random drift)
- **Glow**: Soft glow effect on each particle (10px blur radius)
- **Color**: ROY001

#### Transition 1→2 (0:03 - 0:05)
**Duration**: 2 seconds
- **Effect**: Particles smoothly converge toward center
- **Easing**: Ease-in-out (smooth acceleration and deceleration)
- **Trail Effect**: Optional subtle motion blur on particles

#### Phase 2: Unified Cluster (0:05 - 0:07)
**Duration**: 2 seconds
- **State**: All particles clustered in center forming a dense sphere
- **Cluster Diameter**: 300-400px
- **Particle Behavior**: Particles rotate/orbit within the cluster
- **Glow**: Increased glow intensity (creates spherical bloom effect)
- **Pulsing**: Subtle breathing effect (5% size variation)

#### Transition 2→3 (0:07 - 0:10)
**Duration**: 3 seconds
- **Effect**: Cluster particles rearrange to form brain structure
- **Morphing**: Smooth particle redistribution
- **Brain Formation**: Particles trace brain outline and internal structures

#### Phase 3: Human Brain Illustration (0:10 - 0:13)
**Duration**: 3 seconds
- **Structure**: Stylized brain with visible:
  - Cerebral hemispheres (left and right)
  - Cerebellum suggestion
  - Neural connection lines between particle nodes
- **Particle Count**: 200-300 particles forming brain structure
- **Neural Lines**: Thin connecting lines (1-2px) in ROY001 at 30% opacity
- **Details**: Key brain regions highlighted in white
- **Animation**: Subtle neural activity (particles pulse, connections flicker)

#### Transition 3→4 (0:13 - 0:15)
**Duration**: 2 seconds
- **Effect**: Brain structure dissolves back into cluster
- **Easing**: Ease-in (particles pull toward center)

#### Phase 4: Cluster Return (0:15 - 0:16)
**Duration**: 1 second
- **State**: Brief unified cluster (same as Phase 2)
- **Purpose**: Transition state between transformations

#### Transition 4→5 (0:16 - 0:18)
**Duration**: 2 seconds
- **Effect**: Cluster expands and transforms into dashboard elements
- **Expansion**: Particles spread across canvas to form UI components

#### Phase 5: AI Dashboard/Interface (0:18 - 0:21)
**Duration**: 3 seconds
- **Elements to Form**:
  1. **Graph/Charts** (left side):
     - Line graph with ROY001 data line
     - Bar chart elements
     - White axis labels and gridlines
  2. **Data Cards** (right side):
     - Rectangular cards with particle borders
     - White icon suggestions inside cards
     - ROY001 accent borders
  3. **Center Panel**:
     - Circular progress indicators
     - Particle-formed metrics display
     - White text/numbers
- **Animation**: Data flowing, graphs updating, cards pulsing
- **Particles**: 250-350 particles forming UI outlines and data points

#### Transition 5→6 (0:21 - 0:22)
**Duration**: 1 second
- **Effect**: Dashboard dissolves into center cluster
- **Easing**: Ease-in-out

#### Phase 6: Cluster Return (0:22 - 0:23)
**Duration**: 1 second
- **State**: Brief unified cluster

#### Transition 6→7 (0:23 - 0:25)
**Duration**: 2 seconds
- **Effect**: Cluster rises and disperses into cloud formations
- **Motion**: Particles drift upward and spread

#### Phase 7: Cloud Formations (0:25 - 0:28)
**Duration**: 3 seconds
- **Cloud Structure**:
  - 3-4 cloud formations at different depths
  - White base particles forming cloud bodies
  - ROY001 particles as highlights/edges/electrical accents
  - Varied cloud sizes (suggest perspective/depth)
- **Particle Count**: 200-300 particles
- **Motion**: Slow horizontal drift (clouds moving gently)
- **Detail**: Wispy edges, volumetric appearance
- **Tech Element**: Subtle circuit-like patterns in ROY001 within clouds

#### Transition 7→1 (0:28 - 0:30)
**Duration**: 2 seconds
- **Effect**: Clouds dissolve and particles scatter back to starting positions
- **Motion**: Particles drift downward and outward
- **Easing**: Ease-out (smooth deceleration)
- **Seamless Loop**: Final frame matches starting frame exactly

---

## Detailed Technical Guidelines

### Particle System
- **Particle Shape**: Perfect circles (spheres)
- **Particle Glow**: Gaussian blur with 8-12px radius
- **Core-to-Glow Ratio**: 30% solid core, 70% glow
- **Z-Depth**: Use particle size variation to suggest depth (larger = closer)
- **Anti-aliasing**: High quality anti-aliasing on all particles

### Morphing Transitions
- **Interpolation**: Use bezier easing curves for natural motion
- **Particle Tracking**: Each particle should have a defined path between states
- **Stagger Effect**: Slight timing offsets (50-100ms) between particles for organic feel
- **Speed Variation**: Particles at edges move slightly faster than center particles

### Background Treatment
- **Base Color**: Pure black `#000000` or `#0A0A0A`
- **Vignette**: Optional subtle vignette (10% opacity) to keep focus central
- **Grain**: Optional film grain at 2-3% opacity for premium feel
- **Gradient**: Optional subtle radial gradient from center (5% lighter) to edges

### Visual Effects
- **Motion Blur**: Enable subtle motion blur on fast-moving particles (2-3 samples)
- **Bloom**: Light bloom effect on particle clusters (5-10px radius)
- **Glow Intensity**: Increase glow during cluster phases, reduce during scattered phases
- **Depth of Field**: Optional very subtle DOF effect to enhance depth perception

### Performance Optimization
- **Particle Occlusion**: Hide particles behind opaque elements (dashboard cards, clouds)
- **LOD System**: Reduce particle complexity in background layers
- **Compression**: Use VP9 codec with CRF 31-35 for quality/size balance
- **Preload Optimization**: Ensure first frame is keyframe for instant playback

---

## Software Recommendations

### Recommended Tools
1. **After Effects** + Particular (Trapcode) plugin
   - Best for particle systems and morphing
   - Excellent control over particle behavior
   - Professional motion graphics workflow

2. **Blender** (Geometry Nodes + Animation Nodes)
   - Free and powerful
   - Excellent particle system
   - Full 3D control if needed

3. **Cinema 4D** + X-Particles
   - Industry standard for particle work
   - Intuitive morphing systems

### Export Settings (After Effects Example)
```
Composition Settings:
- Width: 1920px (or 3840px for 4K)
- Height: 1080px (or 2160px for 4K)
- Frame Rate: 30fps or 60fps
- Duration: 30 seconds

Export via Media Encoder:
- Format: WebM
- Codec: VP9
- Bitrate: VBR 2-pass
- Target Bitrate: 2-4 Mbps (Full HD) or 8-12 Mbps (4K)
- Quality: High
- Frame Rate: Match source
```

---

## Integration Guidelines

### HTML Implementation
```html
<video
  autoplay
  loop
  muted
  playsinline
  class="background-video"
  poster="fallback-image.jpg"
>
  <source src="animated-background.webm" type="video/webm">
</video>
```

### CSS Styling
```css
.background-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
  opacity: 0.7; /* Adjust for background use */
  pointer-events: none;
}
```

### React Integration (for this project)
```tsx
// In Hero component, replace current background
<div className="absolute inset-0 z-0">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover opacity-60"
  >
    <source src="/animated-background.webm" type="video/webm" />
  </video>
  <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background z-10"></div>
</div>
```

---

## Quality Checklist

### Before Delivery
- [ ] Video loops seamlessly (no visible jump)
- [ ] ROY001 color is consistently applied
- [ ] All transitions are smooth (no jarring movements)
- [ ] Particles maintain consistent style throughout
- [ ] Brain illustration is clearly recognizable
- [ ] Dashboard elements are distinct and identifiable
- [ ] Cloud formations look natural
- [ ] File size is web-optimized (under target)
- [ ] Video plays smoothly at 30fps minimum
- [ ] Background doesn't interfere with foreground content
- [ ] White elements have sufficient contrast on dark background
- [ ] Glow effects are subtle and premium-looking

### Testing Requirements
- [ ] Test on desktop browsers (Chrome, Firefox, Safari)
- [ ] Test on mobile devices (iOS Safari, Chrome Android)
- [ ] Verify autoplay works with muted attribute
- [ ] Check loading time on 3G/4G connections
- [ ] Ensure video doesn't cause layout shift on load

---

## Reference Assets Needed

### From Client
1. **Exact ROY001 color code** (hex value)
2. **Reference image** (provided - use for style inspiration)
3. **Logo** (for potential integration or style matching)
4. **Brand guidelines** (if available)

---

## Example Morphing Keyframes (After Effects)

### Brain Structure Formation
```
Particles should form:
- Outer cortex: Dense particle ring
- Hemispheres: Two distinct rounded sections
- Connecting neurons: Thin lines between particles
- Synaptic activity: Particles pulse at 0.5s intervals
```

### Dashboard Layout
```
Left side (30% width):
  - Line graph: Y-axis 0-100, X-axis with 5 points
  - Bar chart: 4 bars of varying heights

Center (40% width):
  - Circular progress: 75% filled
  - Metric cards: 3 stacked rectangles

Right side (30% width):
  - Data visualization particles
  - Flowing data streams (top to bottom)
```

### Cloud Formation
```
Cloud 1 (background): Large, low opacity (40%)
Cloud 2 (mid-ground): Medium, 60% opacity
Cloud 3 (foreground): Small, 80% opacity

All clouds: Horizontal drift right at 20px/second
```

---

## Estimated Production Time
- Storyboarding: 2-3 hours
- Particle system setup: 3-4 hours
- Animation/morphing: 8-10 hours
- Fine-tuning transitions: 3-4 hours
- Rendering/optimization: 2-3 hours
- **Total**: 18-24 hours (professional motion designer)

---

## Deliverables

1. **Primary File**: animated-background.webm (Full HD or 4K)
2. **Fallback**: animated-background.mp4 (for Safari compatibility)
3. **Poster Image**: static-frame.jpg (first frame, for loading state)
4. **Preview**: Low-res preview for approval before final render
5. **Source Files**: After Effects project (if requested)

---

## Notes for Motion Designer

- This animation is designed for background use - avoid overly complex details
- Subtlety is key - the animation should enhance, not distract
- The reference image shows a particle/sphere style - maintain this aesthetic
- Ensure smooth, organic transitions between states
- Test the loop point extensively - it must be completely seamless
- Consider adding very subtle camera motion for added depth
- Particle count can be adjusted based on performance needs
- All timings are suggestions - adjust for best visual flow

---

**Questions or clarifications needed:**
1. Exact hex code for ROY001 color
2. Preferred video resolution (Full HD or 4K?)
3. Specific dashboard/interface elements to feature?
4. Any specific brain illustration style preference?
5. Should clouds have a tech/circuit aesthetic or natural look?
