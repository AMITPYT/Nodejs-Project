import React from 'react'

function MoreDetails() {
    return (
        <section id='header1' className='d-flex align-items-center'>
            <div className='row'>
                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-contant-center flex-column mt-5'>
                    <h1 className='notes'> Notes Info :- </h1>
                    <p className='more'>
                        Notepad is a text editor, i.e., an app specialized in editing plain text. It can edit text files
                        (bearing the ".txt" filename extension) and compatible formats, such as batch files, INI files, and log files.
                        Notepad can read and write plain texts encoded in ASCII, UTF-8, and UTF-16. It supports both left-to-right and
                        right-to-left based languages.
                        Notepad offers only the most basic text manipulation functions, such as finding and replacing text.
                        Until Windows ME, there were almost no keyboard shortcuts and no line-counting feature. Starting with
                        Windows 2000, shortcuts for common commands like "New", "Open", and "Save" were added, as well as a status
                        bar with a line counter (available only when word-wrap is disabled). Before Windows 10 version 1809,
                        Notepad could not properly interpret Unix-style or Mac-style newline characters. Windows 10 version
                        1809 also introduced the Ctrl+← Backspace keyboard shortcut (deletes the previous word), zoom functionality,
                        the ability to zoom in and out, and the "Search with Bing" function.
                        Improving performance has been the main focus of Notepad's development. As part of this effort, Notepad is
                        capable of reading text files even when other apps have acquired a range-based lock on the file.
                    </p>
                </div>
                <div className='col-lg-3 order-1 order-lg-2 header-img'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Notepad_plus_plus.png" className='image1' alt="hello1" />
                </div>
            </div>
        </section>
    )
}

export default MoreDetails
