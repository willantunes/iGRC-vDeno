import { useEffect, useRef, useState } from "preact/hooks";

export function LoginCharacter() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  
  useEffect(() => {
    const handleInputFocus = (e: FocusEvent) => {
      const input = e.target as HTMLInputElement;
      setIsPasswordFocused(input.type === 'password');
    };

    const handleInputBlur = () => {
      setIsPasswordFocused(false);
    };

    // Listen to focus events on input elements
    document.querySelectorAll('input').forEach(input => {
      input.addEventListener('focus', handleInputFocus);
      input.addEventListener('blur', handleInputBlur);
    });

    return () => {
      document.querySelectorAll('input').forEach(input => {
        input.removeEventListener('focus', handleInputFocus);
        input.removeEventListener('blur', handleInputBlur);
      });
    };
  }, []);

  return (
    <div class="w-48 h-48 mx-auto mb-8">
      <svg 
        ref={svgRef}
        class="w-full h-full login-character" 
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Base circle */}
        <circle cx="100" cy="100" r="90" fill="#ddf1fa" stroke="#3a5e77" stroke-width="2.5"/>
        
        {/* Arms that cover eyes during password input */}
        <g class={`arms ${isPasswordFocused ? 'covering' : ''}`}>
          <path 
            class="arm left"
            d="M 50 140 Q 60 90 70 80" 
            fill="none" 
            stroke="#3a5e77" 
            stroke-width="8"
            style={{
              transform: isPasswordFocused ? 'rotate(-45deg) translateY(-20px)' : 'none',
              transformOrigin: '50px 140px',
              transition: 'transform 0.3s ease'
            }}
          />
          <path 
            class="arm right"
            d="M 150 140 Q 140 90 130 80" 
            fill="none" 
            stroke="#3a5e77" 
            stroke-width="8"
            style={{
              transform: isPasswordFocused ? 'rotate(45deg) translateY(-20px)' : 'none',
              transformOrigin: '150px 140px',
              transition: 'transform 0.3s ease'
            }}
          />
        </g>
        
        {/* Eyes */}
        <g class="eyes">
          <circle class="eye left" cx="70" cy="80" r="10" fill="white" stroke="#3a5e77" stroke-width="2"/>
          <circle class="eye right" cx="130" cy="80" r="10" fill="white" stroke="#3a5e77" stroke-width="2"/>
          <circle 
            class="pupil left" 
            cx="70" 
            cy="80" 
            r="4" 
            fill="#3a5e77"
            style={{
              transform: isPasswordFocused ? 'scale(0)' : 'none',
              transition: 'transform 0.3s ease'
            }}
          />
          <circle 
            class="pupil right" 
            cx="130" 
            cy="80" 
            r="4" 
            fill="#3a5e77"
            style={{
              transform: isPasswordFocused ? 'scale(0)' : 'none',
              transition: 'transform 0.3s ease'
            }}
          />
        </g>

        {/* Mouth */}
        <path 
          class="mouth"
          d={isPasswordFocused 
            ? "M 65 120 Q 100 110 135 120" // Nervous expression
            : "M 65 120 Q 100 140 135 120" // Normal smile
          }
          fill="none" 
          stroke="#3a5e77" 
          stroke-width="2"
          style={{
            transition: 'd 0.3s ease'
          }}
        />
      </svg>
    </div>
  );
} 