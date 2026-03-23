import React from 'react';
import './ThemeToggle.css';

export default function ThemeToggle({ dark, onToggle }) {
    // If `dark` is true, the current theme is night.
    // We use `isDay` (not dark) to match CSS logic.
    const isDay = !dark;

    return (
        <button
            className={`theme-switch ${isDay ? 'day' : ''}`}
            onClick={onToggle}
            aria-label={isDay ? "Switch to night mode" : "Switch to day mode"}
            title={isDay ? "Night mode" : "Day mode"}
            dangerouslySetInnerHTML={{ __html: window.themeToggleSVGString }}
        />
    );
}
