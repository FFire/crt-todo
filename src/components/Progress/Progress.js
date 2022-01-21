import React from 'react';
import '../../styles/output.css';

export class Progress extends React.Component {
  render() {
    const { message: { text, mode } } = this.props;
    return <>
      <div className='w-full px-6 pb-2 bg-slate-100'>
        <p className="text-slate-500 pl-6 dark:text-black text-sm">
          {text}
        </p>
        <div className="w-full  h-4 bg-gradient-to-r from-slate-200 to-stone-200 rounded-full">
          <div className="w-3/5  h-full rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400"/>
        </div>
      </div>
    </>;
  }
}
