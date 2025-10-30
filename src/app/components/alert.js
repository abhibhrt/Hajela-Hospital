'use client';
import { useEffect, useState } from 'react';
import { useAlert } from '../hooks/useAlert';
import { 
  FaCheckCircle, 
  FaExclamationCircle, 
  FaInfoCircle, 
  FaExclamationTriangle,
  FaTimes 
} from 'react-icons/fa';

const Alert = () => {
  const { alert, show, hideAlert } = useAlert();
  const [animationType, setAnimationType] = useState('slideInRight');

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        hideAlert();
      }
    };

    if (show) {
      document.addEventListener('keydown', handleEscape);
      // Random animation each time
      const animations = ['slideInRight', 'slideInLeft', 'slideInTop', 'slideInBottom', 'bounceIn'];
      setAnimationType(animations[Math.floor(Math.random() * animations.length)]);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [show, hideAlert]);

  if (!alert) return null;

  const alertConfig = {
    success: {
      icon: FaCheckCircle,
      iconColor: 'text-green-400',
      borderColor: 'border-green-500',
      glowColor: 'shadow-lg shadow-green-500/30'
    },
    error: {
      icon: FaExclamationCircle,
      iconColor: 'text-red-400',
      borderColor: 'border-red-500',
      glowColor: 'shadow-lg shadow-red-500/30'
    },
    warning: {
      icon: FaExclamationTriangle,
      iconColor: 'text-yellow-400',
      borderColor: 'border-yellow-500',
      glowColor: 'shadow-lg shadow-yellow-500/30'
    },
    info: {
      icon: FaInfoCircle,
      iconColor: 'text-blue-400',
      borderColor: 'border-blue-500',
      glowColor: 'shadow-lg shadow-blue-500/30'
    }
  };

  const getAnimationClasses = (show) => {
    const baseClasses = "transform transition-all duration-500 ease-out";
    
    const animations = {
      slideInRight: {
        in: "translate-x-0 opacity-100 scale-100",
        out: "translate-x-full opacity-0 scale-95"
      },
      slideInLeft: {
        in: "translate-x-0 opacity-100 scale-100",
        out: "-translate-x-full opacity-0 scale-95"
      },
      slideInTop: {
        in: "translate-y-0 opacity-100 scale-100",
        out: "-translate-y-full opacity-0 scale-95"
      },
      slideInBottom: {
        in: "translate-y-0 opacity-100 scale-100",
        out: "translate-y-full opacity-0 scale-95"
      },
      bounceIn: {
        in: "translate-y-0 opacity-100 scale-100",
        out: "translate-y-full opacity-0 scale-75"
      }
    };

    const animation = animations[animationType] || animations.slideInRight;
    return `${baseClasses} ${show ? animation.in : animation.out}`;
  };

  const config = alertConfig[alert.type] || alertConfig.info;
  const IconComponent = config.icon;

  return (
    <div className="fixed top-18 right-2 z-50">
      <div className={getAnimationClasses(show)}>
        <div className={`bg-gray-800 rounded-lg border-l-4 ${config.borderColor} ${config.glowColor} shadow-2xl p-4 min-w-80 max-w-md backdrop-blur-sm bg-gray-800/95`}>
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <IconComponent className={`h-5 w-5 ${config.iconColor} animate-bounce`} />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-white">
                {alert.message}
              </p>
            </div>
            <div className="ml-4 flex flex-shrink-0">
              <button
                type="button"
                className="inline-flex rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-200 hover:scale-110"
                onClick={hideAlert}
              >
                <span className="sr-only">Close</span>
                <FaTimes className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;