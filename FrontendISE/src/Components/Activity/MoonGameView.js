import React from "react";
import Unity, { UnityContent } from "react-unity-webgl";

const unityContext = new UnityContent("build/moongame.json","build/UnityLoader.js");

export const MoonGameView = () => {
    return <Unity unityContent={unityContext} />
};