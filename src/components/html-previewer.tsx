"use client"; 


import React, { useState, ChangeEvent } from "react";


import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";


import { predefinedHtml } from "./predefinedHtml";

export default function HTMLPreviewComponent() {
  // State hooks for managing HTML code input and preview
  const [htmlCode, setHtmlCode] = useState<string>("");
  const [previewHtml, setPreviewHtml] = useState<string>("");

  // Handler to generate HTML preview
  const handlePreview = (): void => {
    setPreviewHtml(htmlCode);
  };

  // Handler to paste predefined HTML into the textarea
  const handlePasteHtml = (): void => {
    setHtmlCode(predefinedHtml);
  };

  // Handler for updating HTML code state on textarea change
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setHtmlCode(e.target.value);
  };

  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-4">
      {/* Center the HTML previewer card within the screen */}
      <div className="w-full max-w-2xl p-6 rounded-lg shadow-lg bg-card">
        <h1 className="text-2xl font-bold mb-4 text-center">HTML Previewer</h1>
        <p className="text-muted-foreground mb-4 text-center">
          Enter your HTML code and see the preview.
        </p>
        <div className="grid gap-4">
          {/* Textarea for entering HTML code */}
          <Textarea
            value={htmlCode}
            onChange={handleChange}
            placeholder="Enter your HTML code here..."
            className="p-4 rounded-lg border border-input bg-background text-foreground"
            rows={8}
          />
          {/* Buttons to generate preview and paste predefined HTML */}
          <div className="flex justify-center">
            <div className="flex gap-2">
              <Button onClick={handlePreview}>Generate Preview</Button>
              <Button onClick={handlePasteHtml}>Paste HTML Example</Button>
            </div>
          </div>
          {/* Div to display the HTML preview */}
          <div className="p-4 rounded-lg border border-input bg-background text-foreground min-h-[100px] w-full">
            <div dangerouslySetInnerHTML={{ __html: previewHtml }} />
          </div>
          
        </div>
      </div>
    </div>
  );
}