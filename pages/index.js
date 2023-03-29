import Head from 'next/head';
import { useFormik } from "formik";
import { useRouter } from "next/router";

async function saveData(data) {
  const response = await fetch('/api/contacts', {
    method: 'POST',
    body: JSON.stringify(data)
  })
  if(!response.ok){
    throw new Error(response.statusText);
  }

  return await response.json();
};

export default function Home() {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      reg_no: '',
      name: '',
      branch: '',
      year_of_study: '',
      section: '',
      batch: '',
      type_of_participation: ''
    },
    onSubmit: (values) => {
      console.log("form submitted");
      console.log(values);
      try{
        saveData(values);
      } catch{
          
      }
      localStorage.setItem("user-data",JSON.stringify(values));
      window.alert("Submitted Successfully.");
      router.push({ pathname: "/submitted", query: values });
    },
  });
  return (
    <div>
      <Head>
        <title>Student Database</title>
        <meta name="description" content="SRMIST student achievements database" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        <nav className={`py-2 px-2 flex flex-col items-center justify-center`}>
            <h1 className="py-2 px-2 text-2xl">Faculty of Engineering & Technology</h1>
            <h1 className="py-1 px-2 text-2xl ">Department of CSE & CSE_AIML</h1>
            <h2 className="py-2 px-2 text-2xl underline">Database on Student's Achievements</h2>
        </nav>
        <form onSubmit={formik.handleSubmit} method="post">
            <div className="py-6 flex flex-col justify-center bg-slate-300 m-auto xl:w-1/2 sm:w-3/4 rounded-xl">
                <div className="flex justify-center">
                    <label htmlFor="reg_no" className="mr-4">Reg. No.</label>
                    <input className="w-40 rounded-sm" name="reg_no" type="text" required minLength="10" maxLength="20" onChange={formik.handleChange}></input>
                </div>
                <div className="flex justify-center mt-3">
                    <label htmlFor="name" className="mr-4">Name</label>
                    <input className="w-40 rounded-sm" name="name" type="text" placeholder="" required minLength="10" maxLength="20" onChange={formik.handleChange}></input>
                </div>
                <div className="flex justify-center mt-3">
                    <label htmlFor='branch' className='mr-4'>Branch</label>
                    <select name='branch' required defaultValue={"default"}  onChange={formik.handleChange}>
                        <option value="default" disabled>Select</option>
                        <option>CSE</option>
                        <option>CSE_AIML</option>
                    </select>
                </div>
                <div className="flex justify-center mt-3">
                    <label htmlFor='year_of_study' className='mr-4'>Year of Study</label>
                    <select name='year_of_study' required defaultValue={"default"} onChange={formik.handleChange}>
                        <option value="default" disabled>Select</option>
                        <option>1</option>
                        <option>2</option>
                    </select>
                </div>
                <div className="flex justify-center mt-3">
                    <label htmlFor='section' className='mr-4'>Section</label>
                    <select name='section' required defaultValue={"default"} onChange={formik.handleChange}>
                        <option value="default" disabled>Select</option>
                        <option>A</option>
                        <option>B</option>
                        <option>N/A</option>
                    </select>
                </div>
                <div className="flex justify-center mt-3">
                    <label htmlFor='batch' className='mr-4'>Batch</label>
                    <select name='batch' required defaultValue={"default"} onChange={formik.handleChange}>
                        <option value="default" disabled>Select</option>
                        <option>2021-2025</option>
                        <option>2022-2026</option>
                    </select>
                </div>
                <div className="flex justify-center mt-3">
                    <label htmlFor='type_of_participation' className='mr-4'>Type of participation</label>
                    <select name='type_of_participation' required defaultValue={"default"} onChange={formik.handleChange}>
                        <option value="default" disabled>Select</option>
                        <option>FDP</option>
                        <option>Workshop</option>
                        <option>Internship</option>
                        <option>Online Course</option>
                        <option>Conference</option>
                        <option>Hackathon</option>
                    </select>
                </div>

                <button className="self-center bg-slate-600 py-1 mt-4 w-20 text-white rounded-xl" type="submit">Submit</button>
            </div>
        </form>
      </main>
    </div>
  )
}
